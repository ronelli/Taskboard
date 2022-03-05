
<template>
    <div class="sortingNotes">
        <select v-model="selected" @change="onChange($event)">
            <option disabled value="">sort notes</option>
            <option value="1">by title</option>
            <option value="2">by priority</option>
            <option value="3">by expired date </option>
        </select>  
    </div>
</template>

<script>

export default {
  name: 'SortingNotes',
  props: {
    note: {
    }
  },
  data() {
      return {
          selected: ""
      }
  },
  methods:{
      onChange(event) {
          this.sortNotes(event.target.value);
      },
      sortNotes(option) {
        switch(Number(option)){
            case 1:
                this.titleSorting();
                console.log('sort by title');
                break;
            case 2:
                this.prioritySorting();
                console.log('sort by priority');
                break;
            case 3: 
                this.expiredTask();
                console.log('sort by expired date');
                break;
        }
      },
      prioritySorting() {
          this.$store.state.notes.sort((x, y) => (y.highPriority - x.highPriority));
          this.$store.state.doneNotes.sort((x, y) => (y.highPriority - x.highPriority));
      },
      titleSorting() {
          this.$store.state.notes.sort((x,y) => (x.title.localeCompare(y.title)));
          this.$store.state.doneNotes.sort((x,y) => (x.title.localeCompare(y.title)));
      },
      expiredTask() {
          this.$store.state.notes.sort((x,y) => (new Date(x.selectedDate) - new Date(y.selectedDate)));
          this.$store.state.doneNotes.sort((x,y) => (new Date(x.selectedDate) - new Date(y.selectedDate)));
      } 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
