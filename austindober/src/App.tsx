import { RouterView } from "vue-router";
import "@/assets/styles/base.css";
import { defineComponent } from "vue";

const App = defineComponent({

  setup() {
    return() => <RouterView />
  }
})

export default App
