
<template>
    <div class="container">
        <AddNewNote ></AddNewNote>
        <!-- <div class="notes"> -->
        <div id="allNotes">
                    <div class="accordion" role="tablist">
                <div id="toDo">
                    <h2>TO DO</h2>
                        <draggable  class="notes"  @change="toDoChange($event)" :list="notes" :options="{group:'allTasks'}" :animation="200">
                            <SingleNote v-for="(note,index) in notes" :note="note" :key="index" draggable="true"></SingleNote>
                        </draggable>
                    <!-- </div> -->
                </div>
                <div id="done">
                    <h2>DONE</h2>
                    <!-- <div class="accordion" role="tablist"> -->
                        <draggable class="notes" @change="doneNotesChange($event)" :list="doneNotes" :options="{group:'allTasks'}" :animation="200">
                            <SingleNote v-for="(note,index) in doneNotes" :note="note" :key="index" draggable="true"></SingleNote>
                        </draggable>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import AddNewNote from "../mainArea/AddNewNote.vue";
import SingleNote from '../mainArea/SingleNote.vue';
import draggable from 'vuedraggable';
export default {
  name: 'Notes',
  props: {
    
  },
  components: {
      SingleNote,
      AddNewNote,
      draggable
  },
  data() {
      return {
        notes: this.$store.state.notes,
        doneNotes: this.$store.state.doneNotes
      }
  },
  methods: {
      doneNotesChange(event){
          if(event.moved){
              localStorage.setItem('doneNotes',JSON.stringify(this.doneNotes));
          }
      },
      toDoChange(event) {
          if(event.removed) {
              event.removed.element.isDone = true;
          }
          else if(event.added) {
              event.added.element.isDone = false;
          }
          localStorage.setItem('notes',JSON.stringify(this.notes));
          localStorage.setItem('doneNotes',JSON.stringify(this.doneNotes));
      },
      getFromStorage() {
          const data = localStorage.getItem('notes');
          const doneData = localStorage.getItem('doneNotes');
          const counter = localStorage.getItem('notesCounter');
          const toDoNotes = JSON.parse(data); 
          const done = JSON.parse(doneData);
          this.setNotesInfoInState(toDoNotes, done, counter);
      },
      setNotesInfoInState(toDo, done, counter) {
        toDo.forEach(n => {
            this.$store.state.notes.push(n);
        });
        done.forEach(n => {
            this.$store.state.doneNotes.push(n);
        });
        if(counter) this.$store.state.counter = counter;
      }
  },
  beforeMount() {
      this.getFromStorage();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
/* .notes {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
} */
.AddNewNote {
    display:inline;
    margin: 0 3%;
    float:right;
}
.sortNotes {
    float: left ;
}
#toDo, #done {
    height:100%;
    border:1px solid gray;
    border-radius: 10px;
}

.accordion {
    display: contents;
}
#allNotes {
    display: grid;
    gap:10px;
    grid-template-columns: repeat(2, 1fr);
    height: 95%;
    /* border:1px solid gray;
    border-radius: 10px; */
}
h2 {
    text-decoration: underline;
}

.notes {
    height: 90%;
}
.container h2 {
    font-family: mainFont;
}
.container {
    height: 80%;
}
</style>
