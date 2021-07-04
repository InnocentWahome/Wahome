<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <Sidenav />
      </div>
      <div class="col-sm-9">
        TASK_NAME: <input type="text" v-model="task_name" /> <br />
        TASK_DETAILS: <input type="text" v-model="task_details" /> <br />
        TASK_CATEGORY: <input type="text" v-model="task_category" /> <br />
        TASK_STATUS: <input type="text" v-model="task_status" /> <br />
        TASK_COMMENTS: <input type="text" v-model="task_comments" /> <br />
        TASK_ADMIN: <input type="text" v-model="task_admin" /> <br />
        TEAM_ID: <input type="text" v-model="team_id" /> <br />
        PROJECT_ID: <input type="text" v-model="project_id" /> <br />
        USER_ID: <input type="text" v-model="user_id" /> <br />
        ESTIMATE_ID:  <input type="text" v-model="estimate_id" /> <br />
        TASK_SUBTASKS: <input type="text" v-model="task_subtasks" /> <br />
        {{ error }}

    
        <button @click="new_task">New Task</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "./Sidenav.vue";
import axios from "axios";

export default {
  name: "Tasks",
  components: {
    Sidenav,
  },
  data() {
    return {
    task_name: '',
    task_details: '',
    task_category: '',
    task_status: '',
    task_comments: '' ,
    task_admin: '',
    team_id: '',
    project_id: '',
    user_id: '',
    estimate_id: '',
    task_subtasks: '',

      error: '',
    };
  },
  methods: {
    new_task() {
      let newTasks = {
        task_name: this.task_name,
        task_details: this.task_details,
        task_category: this.task_category,
        task_status: this.task_status,
        task_comments: this.task_comment,
        task_admin: this.task_admin,
        team_id: this.team_id,
        project_id: this.project_id,
        user_id: this.user_id,
        estimate_id: this.estimate_id,
        task_subtasks: this.task_subtasks,
        };
      console.log(newTasks)
      axios.post('http://localhost:3333/tasks', newTasks)
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
  
};
</script>

<style></style>

