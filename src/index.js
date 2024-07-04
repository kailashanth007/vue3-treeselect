import Treeselect from '@/components/Treeselect.vue'
import '../styles/style.less'
import App from "@/App.vue"


import { createApp } from "vue";

const app = createApp(App);
app.mount("#app");

export default Treeselect
export { Treeselect }
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
} from './constants'
