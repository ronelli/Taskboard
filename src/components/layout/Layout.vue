
<template>
  <div class="layout">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue"
import Main from "./Main.vue"
import Footer from "./Footer.vue"

// import Header from "./Header.vue"
// import Main from './Main.vue'
// import Footer from './Footer.vue'
export default {
  name: 'Layout',
  components: {
      Header,
      Main,
      Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.layout {
    height: 100%;
    display: grid;
    grid-template-rows: 15% 75% 10%;
}
.main {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
</style>
