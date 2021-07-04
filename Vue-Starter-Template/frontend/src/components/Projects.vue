<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <Sidenav />
      </div>
      <div class="col-sm-9">
        <h1>This is the Projects page</h1>
        PROJECT_NAME: <input type="text" v-model="project_name" /> <br />
        PROJECT_DESCRIPTION:
        <input type="text" v-model="project_description" /> <br />
        START_DATE: <input type="text" v-model="start_date" /> <br />
        DUE_DATE: <input type="text" v-model="due_date" /> <br />
        USER_ID: <input type="text" v-model="user_id" /> <br />
        PROJECT_STATUS: <input type="text" v-model="project_status" /> <br />

        {{ error }}

        <button @click="new_project">New Project</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "./Sidenav.vue";
import axios from "axios";

export default {
  name: "Projects",
  components: {
    Sidenav,
  },
  data() {
    return {
      project_name: "",
      project_description: "",
      start_date: "",
      due_date: "",
      user_id: "",
      project_status: "",

      error: '',
    };
  },
  methods: {
    new_project() {
      let newProject = {
        project_name: this.project_name,
        project_description: this.project_description,
        start_date: this.start_date,
        due_date: this.due_date,
        user_id: this.user_id,
        project_status: this.project_status,
      };
      console.log(newProject)
      axios.post('http://localhost:3333/projects', newProject)
            .then(res => {
                console.log(res)
                this.error = '';
                this.$router.push('/dashboard')
            },err => {
                console.log(err.response)
                this.error = err.response.data.error
            }) ;
    },
  },
  
};
</script>

<style></style>
