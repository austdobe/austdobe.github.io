import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar'


const BaseLayout = defineComponent({
  name: 'BaseLayout',
  setup() {
    return () => (
      <>
       <NavBar />
       <main>
           <RouterView />
       </main>
      </>
    )
  }
})

export default BaseLayout