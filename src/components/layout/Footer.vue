
<template>
  <div class="footer">
    <h6>Copyright © ron_elli - All rights reserved.</h6>
    <b-btn variant="transparent" icon target="blank" href="https://www.linkedin.com/in/ron-elli">
        <b-icon-linkedin scale="2" variant="black" ></b-icon-linkedin>
    </b-btn>
    <b-btn variant="transparent" icon target="blank" href="https://github.com/ronelli?tab=repositories">
        <b-icon-github scale="2" variant="black"></b-icon-github>
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'Footer'
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
.b-icon {
    margin:0 20px;
    cursor: pointer;
}
</style>
