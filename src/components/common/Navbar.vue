<template>
  <header class="topbar" role="banner">
    <nav class="site-contain" role="navigation" aria-label="Main Navigation">
      <div class="nav-left">
        <span class="brand">SwiftTix</span>
      </div>

      <ul class="nav-links desktop-nav">
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/tickets">Tickets</router-link></li>
        <li v-if="isAuthenticated">
          <button @click="logout" class="logout-btn">Logout</button>
        </li>
        <li v-else>
          <router-link to="/auth/login">Login</router-link>
        </li>
      </ul>

      <button
        class="hamburger"
        :aria-expanded="menuOpen"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>
    </nav>

    <ul v-if="menuOpen" class="mobile-nav">
      <li><router-link to="/dashboard" @click="menuOpen = false">Dashboard</router-link></li>
      <li><router-link to="/tickets" @click="menuOpen = false">Tickets</router-link></li>
      <li v-if="isAuthenticated">
        <button @click="handleMobileLogout" class="logout-btn">Logout</button>
      </li>
      <li v-else>
        <router-link to="/auth/login" @click="menuOpen = false">Login</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { isAuthenticated, clearSession } from '../../store/storage'

export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      isAuthenticated: isAuthenticated()
    }
  },
  methods: {
    logout() {
      clearSession()
      this.$router.push('/')
    },
    handleMobileLogout() {
      this.menuOpen = false
      this.logout()
    }
  }
}
</script>