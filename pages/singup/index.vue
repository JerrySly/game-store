<template>
  <div class="singup">
    <div class="singup__form from">
      <section class="form__title">SingUp</section>
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
          <v-text-field
            outlined
            v-model="form.repeatPassword"
            label="Repeat password"
            type="password"
            required
            :rules="repeatRules"
          ></v-text-field>
        </v-form>
      </section>
      <section class="form__actions">
        <v-btn :to="{name: 'login'}" x-large nuxt outlined>Back</v-btn>
        <v-btn x-large color="green" @click="loginUser">SingUp</v-btn>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from 'vue'

const valid = ref(true)
const form: Ref<{
  email: String
  password: String
  repeatPassword: String
}> = ref({
  email: null,
  password: null,
  repeatPassword: null,
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
const repeatRules = [
  (v: string) => !!v || 'Password repeat is required',
  () => passwordConfirm.value || 'Password must be same',
]
const loginUser = () => {
  if ((loginForm.value as any).validate()) {
    console.log('asdasd')
  }
}
const passwordConfirm = computed(() => {
  return form.value.password === form.value.repeatPassword
})
</script>

<style lang="scss" scoped>
.singup {
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
