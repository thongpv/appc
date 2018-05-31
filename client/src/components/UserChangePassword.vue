<template>
    <v-container fluid fill-height id="user-login-page">
      <v-layout class="form-style" align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <div class="logo text-xs-center mb-4">
            <i class="material-icons">border_color</i>
            <h1 class="mb-4">Change Your Password</h1>
            <p class="fw300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <v-form v-model="valid">
            <v-card>
              <v-card-text>
                  <v-text-field 
                    prepend-icon="lock" 
                    label="Old password" 
                    type="password" 
                    v-model="old_password"
                    :rules="messageRules.password"
                    required>
                  </v-text-field>

                  <v-text-field 
                    prepend-icon="lock" 
                    label="New password" 
                    type="password" 
                    v-model="password"
                    :rules="messageRules.password"
                    required>
                  </v-text-field>

                  <v-text-field 
                    prepend-icon="lock" 
                    label="Confirm new assword" 
                    type="password" 
                    v-model="password"
                    :rules="messageRules.password"
                    required>
                  </v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-layout>
                  <v-btn
                    class="mx-auto"
                    :loading="loading"
                    :disabled="loading"
                    color="info"
                    @click.native="loader = 'loading'"
                  >
                    Save
                  </v-btn>
                  <v-btn
                    class="mx-auto"
                    flat  
                  >
                    Cancel
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      valid: false,
      old_password: '',
      password: '',
      email: '',
      messageRules: {
        password: [
          v => !!v || 'Password is required'
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      },
      // Button loading
      loader: null,
      loading: false
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
