<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  setup() {
    return {
      
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
