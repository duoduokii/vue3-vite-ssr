/**
 * 设置开发服务器， 以中间件模式使用vite
 */

//fs（文件系统）
const fs = require('fs')
// path（路径）
const path = require('path')
const express = require('express')
async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === 'production') {
  const app = express()
  const resolve = (p) => path.resolve(__dirname, p)
  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''
  const manifest = isProd ? require('./dist/client/ssr-manifest.json') : {}

  let vite
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: 'info',
      server: {
        middlewareMode: true
      }
    })
    app.use(vite.middlewares)
  } else {
    app.use(require('compression')())
    app.use(
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    )
  }

  app.use('*', async (req, res) => {
    console.log(req.headers['user-agent'])
    const url = req.originalUrl
    try {
      let template, render
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      } else {
        template = indexProd
        render = require('./dist/server/entry-server.js').render
      }

      const [appHtml, preloadLinks] = await render(url, manifest)

      const html = template.replace(`<!--preload-links-->`, preloadLinks).replace('<!-- ssr-outlet -->', appHtml)

      // 6、将渲染完成的HTML返回
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(3000, () => {
    console.log('listen: 3000')
  })
}
createServer()
