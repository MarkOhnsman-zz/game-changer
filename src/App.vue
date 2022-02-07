<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-center p-4">
      <p class="text-dark lighten-40">
        A Work In Progress by Mark Ohnsman
        <a
          class="mdi mdi-github selectable"
          href="https://www.github.com/markohnsman"
          target="_blank"
          title="Mark Ohnsman Github"
        ></a>
      </p>
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
