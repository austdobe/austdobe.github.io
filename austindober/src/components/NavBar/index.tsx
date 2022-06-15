import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

const AppNav = defineComponent({
  name: 'AppNav',
  setup() {

    return () => (
      <nav class="app__nav">
        <RouterLink to="/" class="app__nav-link">
          Home
        </RouterLink>
        <RouterLink to="/about" class="app__nav-link">
            about
        </RouterLink>
      </nav>
    )
  }
})

export default AppNav