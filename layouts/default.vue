<template>
  <div>
    <Nav />
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/system/Nav.vue'
import Header from '@/components/system/Header.vue'
import Footer from '@/components/system/Footer.vue'

export default {
  components: {
    Nav,
    Header,
    Footer
  }
}
</script>