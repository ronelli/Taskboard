
<template>
  <div class="header">
    <b-icon-patch-check scale="3" animation="fade" variant="white" title="Manage Your TasksBoard"></b-icon-patch-check>
    <div class="sorting">
        <SortingNotes></SortingNotes>
    </div>
  </div>
</template>


<script>
import SortingNotes from "../mainArea/SortingNotes";
export default {
  name: 'Header',
  components: {
        SortingNotes
  }
//   props: {
//     msg: 'header'
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-icon {
    float:left;
    position:relative;
    top:50%;
    left:5%;
}
/* .sorting {
    float:left;
    display:inline-block;
    position:relative;
    left:5%;
    top:30px;
} */
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
</style>
