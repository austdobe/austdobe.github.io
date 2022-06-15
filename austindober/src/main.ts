import { createApp } from "vue";
import App from './App';
import router from "./router";

const app = createApp(App);

const init = () => {  

    app.use(router);
    app.mount("#app");
}

init()