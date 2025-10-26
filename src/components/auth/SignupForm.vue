<template>
  <section class="auth-box">
    <h2 class="auth-title">Sign up</h2>
    <form @submit.prevent="handleSubmit" noValidate aria-label="Signup form">
      <label for="signup-email">Email</label>
      <input id="signup-email" type="email" v-model="email" />

      <label for="signup-password">Password</label>
      <input id="signup-password" type="password" v-model="password" />

      <p v-if="err" class="error">{{ err }}</p>

      <div class="auth-actions">
        <button class="btn-primary" type="submit">Sign up</button>
        <router-link to="/auth/login" class="btn-outline">Login</router-link>
      </div>
    </form>
  </section>
</template>

<script>
import { setSession } from '../../store/storage'

export default {
  name: 'SignupForm',
  data() {
    return {
      email: "",
      password: "",
      err: ""
    }
  },
  methods: {
    handleSubmit() {
      this.err = ""

      if (!this.email || !this.password) {
        this.err = "Email and password required."
        return
      }

      const usersRaw = localStorage.getItem("ticketapp_users")
      const users = usersRaw ? JSON.parse(usersRaw) : []

      if (users.find(u => u.email === this.email)) {
        this.err = "User already exists. Please login."
        return
      }

      users.push({ email: this.email, password: this.password })
      localStorage.setItem("ticketapp_users", JSON.stringify(users))
      setSession({ token: "mock-token-abc", user: { email: this.email } })
      this.$router.push("/dashboard")
    }
  }
}
</script>