<template>
  <div class="login">
    <div class="login__form from">
      <section class="form__title">Login</section>
      <section class="form__props">
        <v-form v-model="valid" ref="loginForm">
          <v-text-field
            outlined
            v-model="form.email"
            label="Email"
            required
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="form.password"
            label="Password"
            type="password"
            required
            :rules="passwordRules"
          ></v-text-field>
        </v-form>
      </section>
      <section class="form__actions">
        <v-btn :to="{ name: 'singup' }" x-large nuxt outlined>SingUp</v-btn>
        <v-btn x-large color="green" @click="loginUser">LogIn</v-btn>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

const valid = ref(true)
const form: Ref<{
  email: String
  password: String
}> = ref({
  email: null,
  password: null,
})

const loginForm = ref(null)
const emailRules = [
  (v: string) => !!v || 'Email required',
  (v: string) =>
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    ) || 'E-mail must be valid',
]
const passwordRules = [
  (v: string) => !!v || 'Password required',
  (v: string) =>
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
    'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
]

const loginUser = () => {
  if ((loginForm.value as any).validate()) {
    console.log('asdasd')
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  margin-top: 170px;
  max-width: 500px;
  padding: 25px 15px;
  background-color: black;
  border-radius: 8px;
}
.form {
  &__title {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
  }
  &__props {
    margin-bottom: 20px;
    margin-top: 30px;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
