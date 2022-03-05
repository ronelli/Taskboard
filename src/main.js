import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import Notes from './components/mainArea/Notes.vue'
import SingleNote from './components/mainArea/SingleNote.vue'
import AddNewNote from './components/mainArea/AddNewNote.vue'
import SortingNotes from "./components/mainArea/SortingNotes.vue";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons, TooltipPlugin  } from 'bootstrap-vue'
import draggable from 'vuedraggable';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

//Make bootstrap tooltip available throughout the project
Vue.use(TooltipPlugin)
// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons);

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        notes: [],
        doneNotes:[],
        counter: 0
    }
})
new Vue({
    store,
    components: {
        Notes,
        SingleNote,
        AddNewNote,
        SortingNotes,
        draggable
    },
  render: h => h(App),
}).$mount('#app')
