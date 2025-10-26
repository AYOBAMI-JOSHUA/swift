<template>
  <div>
    <NavBar />

    <main class="dashboard" role="main">
      <header class="dashboard-header">
        <h1>Dashboard</h1>
        <p class="muted">Overview of your ticket activities</p>
      </header>

      <section class="stats-grid" aria-label="Ticket statistics">
        <article class="stat-card">
          <h3>Total Tickets</h3>
          <p>{{ total }}</p>
        </article>

        <article class="stat-card status-open">
          <h3>Open</h3>
          <p>{{ open }}</p>
        </article>

        <article class="stat-card status-progress">
          <h3>In Progress</h3>
          <p>{{ inProgress }}</p>
        </article>

        <article class="stat-card status-closed">
          <h3>Closed</h3>
          <p>{{ closed }}</p>
        </article>
      </section>

      <section class="dashboard-actions">
        <router-link to="/tickets" class="btn-primary">Manage Tickets</router-link>
      </section>
    </main>
    <div class="decor-circle decor-circle--large" aria-hidden="true"></div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import { loadTickets } from '../store/storage'

export default {
  name: 'Dashboard',
  components: {
    NavBar
  },
  computed: {
    tickets() {
      return loadTickets()
    },
    total() {
      return this.tickets.length
    },
    open() {
      return this.tickets.filter(t => t.status === "open").length
    },
    inProgress() {
      return this.tickets.filter(t => t.status === "in_progress").length
    },
    closed() {
      return this.tickets.filter(t => t.status === "closed").length
    }
  }
}
</script>