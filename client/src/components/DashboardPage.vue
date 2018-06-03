<template>
  <div id="addd">
    <form>
      <input type="text" v-model="emailValue" placeholder="Enter"/>
      <p v-if="!$v.emailValue.required">The email field is required!</p>
      <p v-if="!$v.emailValue.email">The input must be a proper email!</p>
      <hr>
      <div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
          <label class="form__label">Password</label>
          <input class="form__input" v-model.trim="$v.password.$model" placeholder="PW"/>
        </div>
        <div class="error" v-if="!$v.password.required">Password is required.</div>
        <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
 
        <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
          <label class="form__label">Repeat password</label>
          <input class="form__input" v-model.trim="$v.repeatPassword.$model" placeholder="PW_C"/>
        </div>
        <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

export default {
  name: 'Registration',
  validations: {
    emailValue: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  data () {
    return {
      emailValue: ''
    }
  }
}
</script>
<style scoped lang="scss">
</style>
