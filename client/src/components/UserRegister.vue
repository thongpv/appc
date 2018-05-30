<template>
    <v-container fluid fill-height id="user-login-page">
      <v-layout class="form-style" align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <div class="logo text-xs-center mb-4">
            <i class="material-icons">group_add</i>
            <h1 class="mb-4">Register</h1>
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

                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Birthday"
                    prepend-icon="cake"
                    readonly
                    required
                    :rules="dateRules"
                  ></v-text-field>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>

                <v-text-field 
                  prepend-icon="person" 
                  label="Your name" 
                  type="text" 
                  v-model="name">
                </v-text-field>

                <v-select
                  :items="states"
                  v-model="a1"
                  label="Country"
                  autocomplete
                  prepend-icon="map"
                ></v-select>

                <v-radio-group v-model="gender" prepend-icon="all_inclusive" row>
                  <v-radio
                    label="Male"
                    color="blue"
                    value="male"
                  ></v-radio>
                  <v-radio
                    label="Female"
                    color="blue"
                    value="female"
                  ></v-radio>
                </v-radio-group>

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
                  Register
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
          <p class="mt-3 text-xs-center">
            I have an account? 
            <router-link to="/login">Login now !</router-link>
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
