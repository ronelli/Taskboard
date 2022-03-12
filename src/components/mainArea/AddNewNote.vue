
<template>
    <div class="AddNewNote">
        <b-icon-plus @click="createNote" title="Add New Task" scale="1.5" variant="black"></b-icon-plus>
        <b-modal ref="my-modal" id="modal-1" title="Add New Task" @ok="saveTask" ok-only ok-title="Sumbit" >
            <template #modal-header="{close}" class="modal-header">
                <div class="close-icon" role="button" @click="close()">
                    <b-icon-x-circle></b-icon-x-circle>
                </div>
                <h3>Add New Task</h3>
            </template>
             <form ref="form"  title="submit"  >
                <b-form-group
                    label="Task Subject"
                    label-for="task-input"
                    invalid-feedback="Title must contain 4-20 letters"
                >
                    <b-form-input
                        id="task-input"
                        v-model="title"
                        :state="titleState"
                        maxlength=20
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Description"
                    label-for="description-area"
                    invalid-feedback="Description must contain 6-30 letters"
                >
                <b-form-textarea
                    id="description-area"
                    v-model="description"
                    :state="descState"
                    maxlength=30
    
                ></b-form-textarea>

                </b-form-group>
                <div>
                    <label for="example-datepicker">Choose a date</label>
                    <b-form-datepicker :state="datepickerState" id="example-datepicker" required v-model="selectedDate" class="mb-2" :min="min"></b-form-datepicker>
                </div>
                <b-form-checkbox
                id="checkbox-1"
                v-model="highPriority"
                name="checkbox-1"
                >
                High Priority
                </b-form-checkbox>
        </form>
        </b-modal>
    </div>

    
</template>

<script>

export default {
  name: 'AddNewNote',
  props: {
    checkedPriority: []
  },
  data() {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const minDate = new Date(today);
      return {
          title: "",
          description:"",
          highPriority: false,
          selectedDate: "",
          min: minDate,
          isDone: false,
          id: ""
      }
  },
  computed: {
      titleState() {
        return this.title.length >= 4
      },
      descState() {
          return this.description.length > 6
      },
      datepickerState() {
          return this.selectedDate == "normal";
      }
  },
  methods: {
      isValidFields() {
        if(this.title.length >= 4 && this.description.length > 6 && this.selectedDate) return true;
        return false;
      },
      createNote() {
          this.$refs['my-modal'].show();
      },
      saveTask(bvModalEvt){ 
    if (!this.isValidFields()) {
        bvModalEvt.preventDefault()
        alert('Required fields are mandatory');
    }
    else{
          const obj = {
              title: this.title,
              description: this.description,
              id: 'note-' + this.$store.state.counter,
              highPriority: this.highPriority,
              selectedDate: this.selectedDate,
              isDone: this.isDone
          }
          this.$store.state.notes.push(obj);
          localStorage.setItem('notes',JSON.stringify(this.$store.state.notes));
          this.$store.state.counter++;
          localStorage.setItem('notesCounter',this.$store.state.counter);
          this.title = "";
          this.description = "";
          this.selectedDate = "";
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bi-plus {
  font-size: 50px;
}
::v-deep header.modal-header {
    display: inline !important;
}
.close-icon {
    float: right !important;
}
.modal-header > h3 {
    text-align:center !important;
}
</style>
