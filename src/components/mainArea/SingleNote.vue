
<template>
    <div class="singleNote">
                <b-card
                border-variant="secondary"
                :header="headerText"
                header-border-variant="secondary"
                align="center"
                
            >
                <b-icon-trash @click="deleteNote" title="Delete Task" variant="black" scale="1.4"></b-icon-trash>
                
                <b-icon v-if="priority" icon="star-fill" font-scale="2" class="highPriorityNote" :id="'tooltip-target-' + this.note.id"></b-icon>
                <b-tooltip v-if="priority" :target="'tooltip-target-' + this.note.id" triggers="hover" placement="righttop">
                    <b>High Priority Task</b>
                </b-tooltip>
                <b-card-text>
                    <div>
                        <span> {{this.note.description}}</span>
                    </div>
                    <div>
                        <span>Time:{{currentTime}}</span>
                    </div>
                    <div>
                        <span v-if="this.note.selectedDate">Expire Date: {{this.note.selectedDate}} </span>
                        <span v-else>Expire Date: none</span>
                    </div>
                </b-card-text>
            </b-card> 
            
    </div>
</template>

<script>

export default {
  name: 'SingleNote',
  props: {
    note: {
    }
  },
//   data() {
    //   return {
        //   title: "",
        //   description:"",
        //   id: ""
    //   }
//   },
  computed: {
      headerText() {
          return this.note.title;   
      },
      priority() {
          return (this.note.highPriority) ? 'High Priority Task': '';
      },
      currentTime() {
          const today = new Date();
          let minutes = today.getMinutes();
          let hour = today.getHours();
          if(minutes < 10) { minutes = "0" + minutes;}
          if(hour < 10) { hour = "0" + hour;}
          return hour + ":" + minutes;
      }
  },
  methods: {
      deleteNote(){
          if(this.note.isDone) {
              this.deleteFromDoneNotes();
          }
          else {
              this.deleteFromToDoNotes();
          }
        
      },
      deleteFromDoneNotes() {
        let indexToDelete = this.$store.state.doneNotes.findIndex(n => n.id === this.note.id)
        if(indexToDelete === -1) {
            return;
        }
        this.$store.state.doneNotes.splice(indexToDelete,1);
        localStorage.setItem('doneNotes',JSON.stringify(this.$store.state.doneNotes));
      },
      deleteFromToDoNotes(){
        let indexToDelete = this.$store.state.notes.findIndex(n => n.id === this.note.id)
        if(indexToDelete === -1) {
            return;
        }
        this.$store.state.notes.splice(indexToDelete,1);
        localStorage.setItem('notes',JSON.stringify(this.$store.state.notes));
      }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleNote {
    margin:10px;
}
.bi-trash {
    cursor: pointer;
    position: absolute !important;
    float: right !important;
    top: 10% !important;
    right: 2% !important;
}
.highPriorityNote {
    color: black;
    font-weight: bold;
    font-size: smaller;
    position:absolute;
    left:2%;
    top:0;
}

</style>
