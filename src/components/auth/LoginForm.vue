<template>
  <section class="auth-box">
    <h2 class="auth-title">Login</h2>
    <form @submit.prevent="handleSubmit" noValidate aria-label="Login form">
      <label for="login-email">Email</label>
      <input id="login-email" type="email" v-model="email" />

      <label for="login-password">Password</label>
      <input id="login-password" type="password" v-model="password" />

      <p v-if="err" class="error">{{ err }}</p>

      <div class="auth-actions">
        <button class="btn-primary" type="submit">Login</button>
        <router-link to="/auth/signup" class="btn-outline">Sign up</router-link>
      </div>
    </form>

    <p v-if="toast" class="toast" role="status">{{ toast }}</p>
  </section>
</template>

<script>
import { setSession } from '../../store/storage'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: "",
      password: "",
      err: "",
      toast: ""
    }
  },
  methods: {
    handleSubmit() {
      this.err = ""

      if (!this.email || !this.password) {
        this.err = "Please enter email and password."
        return
      }

      const testUser = { email: "swift@gamil.com", password: "swift123" }
      const usersRaw = localStorage.getItem("ticketapp_users")
      const users = usersRaw ? JSON.parse(usersRaw) : []

      const existing =
        (this.email === testUser.email && this.password === testUser.password) ||
        users.find(u => u.email === this.email && u.password === this.password)

      if (existing) {
        setSession({ token: "mock-token-abc", user: { email: this.email } })
        this.$router.push("/dashboard")
        return
      }

      this.err = "Invalid credentials. Try signup or check email/password."
      this.toast = "Login failed"
      setTimeout(() => {
        this.toast = ""
      }, 2500)
    }
  }
}
</script>