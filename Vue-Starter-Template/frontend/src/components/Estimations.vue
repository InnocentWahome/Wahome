<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <Sidenav />
      </div>
      <div class="col-sm-9">
        <h1>This is the Estimations page</h1>
        ESTIMATE_NAME: <input type="text" v-model="estimate_name" /> <br />
        ESTIMATE_DESCRIPTION: <input type="text" v-model="estimate_description" /> <br />
        ESTIMATE_STATUS: <input type="text" v-model="estimate_status" /> <br />
        TASK_ID: <input type="text" v-model="task_id" /> <br />
        START_DATE: <input type="text" v-model="start_date" /> <br />
        DUE_DATE: <input type="text" v-model="due_date" /> <br />
        CALENDAR_ID: <input type="text" v-model="calendar_id" /> <br />

        <button @click="new_estimate">New Estimate</button>

        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "./Sidenav.vue";
import axios from 'axios'

export default {
  name: "Estimations",
  components: {
    Sidenav,
  },
  data() {
    return {
    estimate_name: '',
    estimate_description: '',
    estimate_status: '',
    task_id: '',
    start_date: '' ,
    due_date: '',
    calendar_id: '',
   
      error: '',
    };
  },
  methods: {
    new_estimate() {
      let newEstimate = {
       estimate_name: this.estimate_name,
        estimate_description: this.estimate_description,
        estimate_status: this.estimate_status,
        task_id: this.task_id,
        start_date: this.start_date,
        due_date: this.due_date,
        calendar_id: this.calendar_id,
        
        };
      console.log(newEstimate)
      axios.post('http://localhost:3333/estimations', newEstimate)
            .then(res => {
                console.log(res)
                this.error = '';
                this.$router.push('/tasks')
            },err => {
                console.log(err.response)
                this.error = err.response.data.error
            }) ;
    },
  },

}
</script>

<style>
</style>