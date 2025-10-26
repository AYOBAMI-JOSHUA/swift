<template>
  <div class="app-root">
    <main class="site-container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>