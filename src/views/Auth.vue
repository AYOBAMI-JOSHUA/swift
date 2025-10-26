<template>
  <div>
    <main class="auth-layout" role="main" aria-label="Authentication pages">
      <LoginForm v-if="currentRoute === 'login'" />
      <SignupForm v-else-if="currentRoute === 'signup'" />
      <LoginForm v-else />
      <div class="decor-circle decor-circle--large" aria-hidden="true"></div>
    </main>
  </div>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue'
import SignupForm from '../components/auth/SignupForm.vue'

export default {
  name: 'Auth',
  components: {
    LoginForm,
    SignupForm
  },
  computed: {
    currentRoute() {
      if (this.$route.path.includes('signup')) return 'signup'
      return 'login'
    }
  }
}
</script>