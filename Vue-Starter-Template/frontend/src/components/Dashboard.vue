<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <Sidenav />
      </div>
      <div class="col-md-10">
        <h3 class="text-center">Welcome, {{name}} </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "./Sidenav.vue";
import axios from 'axios'
// import Topnav from "./Topnav.vue";

export default {
  name: "Dashboard",
  components: {
    Sidenav,
    // Topnav,
  },
  data() {
    return {
      name: '',
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/dashboard');
    }
  },
  //to show on landing page
  mounted() {
    axios.get('http://localhost:3333/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
      })
  },
  }

</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
