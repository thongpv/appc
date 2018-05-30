<template>
    <v-container fluid fill-height id="user-login-page">
      <v-layout class="form-style" align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <div class="logo text-xs-center mb-4">
            <i class="material-icons">group_add</i>
            <h1 class="mb-4">Reset Password</h1>
          </div>
          <v-card>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field 
                  prepend-icon="lock" 
                  label="New Password" 
                  type="password" 
                  v-model="password"
                  :rules="passwordRules"
                  required>
                </v-text-field>

                <v-text-field 
                  prepend-icon="lock" 
                  label="Confirm Password" 
                  type="password" 
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
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
                  Save
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
          <p class="mt-3 text-xs-center">
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
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be less than 6 characters'
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Password is required'
      ],
      dateRules: [
        v => !!v || 'Birthday is required'
      ],
      name: '',
      gender: 'male',
      // Button loading
      loading: false,
      // Quốc tịch
      a1: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'Viet Nam'
      ],
      // Birthday
      date: null,
      menu: false
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
