<template>
    <v-container fluid fill-height id="user-login-page">
      <v-layout class="form-style" align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <div class="logo text-xs-center mb-4">
            <i class="material-icons">group_add</i>
            <h1 class="mb-4 fw300">Reset Password</h1>
          </div>
          <v-form v-model="valid">
            <v-card>
              <v-card-text>
                  <v-text-field 
                    prepend-icon="lock" 
                    label="New Password" 
                    type="password" 
                    v-model="password"
                    :rules="messageRules.password"
                    required>
                  </v-text-field>

                  <v-text-field 
                    prepend-icon="lock" 
                    label="Confirm Password" 
                    type="password" 
                    v-model="confirmPassword"
                    :rules="messageRules.confirmPassword"
                    required>
                  </v-text-field>
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
                    Save
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-form>
          <p class="mt-3 text-xs-center">
            Go back
            <router-link to="/">Home !</router-link>
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
      confirmPassword: '',
      // Button loading
      loader: '',
      loading: false,
      messageRules: {
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be less than 6 characters'
        ],
        confirmPassword: [
          v => !!v || 'Password is required'
        ]
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
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

.logo .material-icons {
  font-size: 65px;
}
</style>
