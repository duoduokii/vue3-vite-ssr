import { createApp } from "./main";
const { app, router } = createApp();
import "./assets/style/reset.scss";

router.isReady().then(() => {
  app.mount("#app", true);
});
