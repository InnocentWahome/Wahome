<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Sign Up</h1>
    </div>
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form id="contact-form" role="form" @submit.prevent="signup">
                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_name">Firstname *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Please enter your firstname *"
                          required="required"
                          data-error="Firstname is required."
                          v-model="firstname"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_lastname">Lastname *</label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="lastname"
                          class="form-control"
                          placeholder="Please enter your lastname *"
                          required="required"
                          data-error="Lastname is required."
                          v-model="lastname"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_need">Role *</label>
                        <select
                          id="form_need"
                          name="need"
                          class="form-control"
                          required="required"
                          data-error="Please specify your role."
                          v-model="role"
                        >
                          <option value="" selected disabled>
                            --Developer--
                          </option>
                          <option>Intern</option>
                          <option>Junior Developer</option>
                          <option>Senior Developer</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_password_confirm"
                          >Confirm Password *</label
                        >
                        <input
                          id="password_confirm"
                          type="password"
                          name="password_confirm"
                          class="form-control"
                          placeholder="Please confirm your preferred password*"
                          required="required"
                          data-error="Your Password Confirmation is required."
                          
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
                        value="Sign Up"
                      />

                      {{ error }}
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
import axios from "axios";

export default {
  name: "Signup",
  components: {},
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      role: "",
      password: "",

      error: "",
    };
  },
  methods: {
    signup() {
      let newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        role: this.role,
        password: this.password,

      };
      console.log(newUser);
      axios.post("http://localhost:3333/register", newUser).then(
        (res) => {
          console.log(res);
          this.error = "";
          this.$router.push("/signin");
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
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
