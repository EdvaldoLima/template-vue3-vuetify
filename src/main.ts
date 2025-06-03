import { createApp, defineAsyncComponent } from 'vue'
const App = defineAsyncComponent(() => import("./App.vue"));
import './assets/main.css'
import { usePlugins } from '@/plugins';
import { useGlobals } from '@/global';
import mockApi from '@/mock/api';

const app = createApp(App);

// Plugins
usePlugins(app);

// Global
useGlobals(app);

// Mock API
mockApi()

app.mount("#app");
