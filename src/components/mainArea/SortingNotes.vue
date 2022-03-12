
<template>
    <div class="sortingNotes">
        <b-form-select v-model="selected" :options="options" @change="onChange($event)" class="mb-3"></b-form-select>
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
        selected: null,
        options: [
          { value: null, text: 'Sort notes' },
          { value: '1', text: 'Sort by title' },
          { value: '2', text: 'Sort by priority' },
          { value: '3', text: 'Sort by expired date'}
        ]

      }
  },
  methods:{
      onChange(val) {
          this.sortNotes(val);
      },
      sortNotes(option) {
        switch(Number(option)){
            case 1:
                this.titleSorting();
                break;
            case 2:
                this.prioritySorting();
                break;
            case 3: 
                this.expiredTask();
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
