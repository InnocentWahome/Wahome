<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Login</h1>
    </div>
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form id="contact-form" role="form" @submit.prevent="login">
                <div class="controls">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Please enter your email *"
                          required="required"
                          data-error="Valid email is required."
                          v-model="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_password">Password *</label>
                        <input
                          id="form_password"
                          type="password"
                          name="password"
                          class="form-control"
                          placeholder="Please enter your password *"
                          required="required"
                          data-error="Your Password is required."
                          v-model="password"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-12">
                      <input
                        type="submit"
                        class="btn btn-success btn-send pt-2 btn-block"
                        value="Sign In"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.8 -->
      </div>
      <!-- /.row-->
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3333/login', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/dashboard');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}

h1 {
  margin-bottom: 40px;
}

label {
  color: #333;
}

.btn-send {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 80%;
  margin-left: 3px;
}

.help-block.with-errors {
  color: #ff3333;
  margin-top: 5px;
}

.card {
  margin-left: 10px;
  margin-right: 10px;
}
body {
  font-family: "Lato", sans-serif;
}

h1 {
  margin-bottom: 40px;
}

label {
  color: #333;
}

.btn-send {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 80%;
  margin-left: 3px;
}

.help-block.with-errors {
  color: #ff3333;
  margin-top: 5px;
}

.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
