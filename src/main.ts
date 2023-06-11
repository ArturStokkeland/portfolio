import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//import components here
import navbar from "@/components/Navbar.vue";
import projectcard from "@/components/ProjectCard.vue";
import coolbutton from "@/components/CoolButton.vue";

const app = createApp(App);

app.use(router);

//add components here
app.component("nav-bar", navbar);
app.component("project-card", projectcard);
app.component("cool-button", coolbutton);

app.mount("#app");
