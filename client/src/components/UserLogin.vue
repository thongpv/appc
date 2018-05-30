<template>
    <v-container fluid fill-height id="user-login-page">
      <v-layout class="form-style" align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <div class="logo text-xs-center mb-4">
            <i class="material-icons">chat</i>
            <h1 class="mb-4">Login</h1>
            <p class="fw300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <v-card>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field 
                  prepend-icon="email" 
                  label="Email" 
                  type="text" 
                  v-model="email"
                  :rules="emailRules"
                  required>
                </v-text-field>

                <v-text-field 
                  prepend-icon="lock" 
                  label="Password" 
                  type="password" 
                  v-model="password"
                  :rules="passwordRules"
                  required>
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-layout column>
                <v-btn
                  class="mx-auto"
                  :loading="loading"
                  :disabled="loading"
                  color="info"
                  @click.native="loader = 'loading'"
                >
                  Login
                </v-btn>
                <!-- Dialog - Forgot password -->
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <v-btn class="mx-auto mt-3" flat block small slot="activator" color="accent" dark>Forgot your password?</v-btn>
                  <v-card>
                    <v-stepper v-model="e1">
                      <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">SEND MAIL</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2">SUCCESS!</v-stepper-step>
                      </v-stepper-header>

                      <v-stepper-items>
                        <v-stepper-content step="1">
                          <v-container fluid fill-height>
                            <v-layout class="form-style" align-center justify-center>
                              <v-flex xs12 sm8 md6 lg4>
                                <div class="logo-forgot text-xs-center mb-4">
                                  <i class="material-icons">email</i>
                                  <h1>Forgot Your Password?</h1>
                                  <p class="fw300">Enter your email address below and we'll send you a secure link to reset your password.</p>
                                </div>
                                <v-form v-model="valid">
                                  <v-text-field 
                                    prepend-icon="email" 
                                    label="Email" 
                                    type="text" 
                                    v-model="email"
                                    :rules="emailRules"
                                    required>
                                  </v-text-field>
                                  <div class="text-xs-center">
                                    <v-btn
                                      class="mx-auto"
                                      :loading="loading"
                                      :disabled="loading"
                                      color="info"
                                      @click.native="ForgotPasswordSendMail"
                                    >
                                      Send
                                    </v-btn>
                                    <v-btn flat @click.native="dialog = false">Cancel</v-btn>
                                  </div>
                                </v-form>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-stepper-content>
                        
                        <v-stepper-content step="2">
                          <v-container fluid fill-height>
                            <v-layout class="form-style" align-center justify-center>
                              <v-flex xs12 sm8 md6 lg4>
                                <div class="logo-forgot text-xs-center mb-4">
                                  <i class="material-icons">done</i>
                                  <h1 class="mb-4">We just sent an email to <br> "{{ email }}"</h1>
                                  <p class="fw300">Click the secure link we sent you to reset your password. If you didn't receive an email, check your Spam folder.</p>
                                </div>
                                <div class="text-xs-center">
                                  <v-btn color="info" @click.native="dialog = false, e1 = 1">Login</v-btn>
                                </div>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-stepper-content>
                      </v-stepper-items>
                    </v-stepper>
                  </v-card>
                </v-dialog>
                <!-- END: Dialog - Forgot password -->
              </v-layout>
            </v-card-actions>
          </v-card>
          <p class="mt-3 text-xs-center">
            Don't have an account? 
            <router-link to="/register">Create now !</router-link>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      // Dialog
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      loader: null,
      // Button loading
      loading: false,
      loadingSendMail: false,
      // Stepper
      e1: 0
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    ForgotPasswordSendMail: function () {
      let _this = this
      this.loader = 'loading'

      // Send mail success
      setTimeout(function () {
        this.loader = null
        _this.e1 = 2
      }, 3000)
    }
  }
}
</script>

<style scoped>
#user-login-page {
  background: -moz-linear-gradient(30deg, #3D5A98 0, #149688 100%);
  background: -webkit-gradient(linear, 30deg, color-stop(0, 3D5A98), color-stop(100%, 149688));
  background: -webkit-linear-gradient(30deg, #3D5A98 0, #149688 100%);
  background: -o-linear-gradient(30deg, #3D5A98 0, #149688 100%);
  background: -ms-linear-gradient(30deg, #3D5A98 0, #149688 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');
  background: linear-gradient(30deg, #3D5A98 0, #149688 100%);
}

.form-style {
  z-index: 1;
}

.logo {
  color: #fff;
}

.logo-forgot .material-icons {
  color: #333;
}

.logo .material-icons,
.logo-forgot .material-icons {
  font-size: 65px;
}

.logo h1,
.logo-forgot h1 {
  font-weight: 300;
}

.stepper {
  box-shadow: none;
}
</style>
