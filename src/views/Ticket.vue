<template>
  <div>
    <NavBar />
    <main class="site-container-inner">
      <header class="headT">
        <h1>Tickets</h1>
      </header>

      <section class="tickets-layout">
        <section class="tickets-create">
          <h2>Create Ticket</h2>
          <TicketForm @save="createTicket" />
        </section>

        <section class="tickets-list">
          <h2>All Tickets</h2>

          <p v-if="tickets.length === 0">No tickets yet.</p>

          <div class="cards">
            <article v-for="t in tickets" :key="t.id" class="ticket-card">
              <div class="ticket-head">
                <strong>{{ t.title }}</strong>
                <span :class="`tag tag-${t.status}`">{{ t.status }}</span>
              </div>

              <p v-if="t.description">{{ t.description }}</p>

              <footer class="ticket-meta">
                <small>{{ new Date(t.createdAt).toLocaleString() }}</small>
                <div class="card-actions">
                  <button @click="setEditing(t)" class="btn-outline">Edit</button>
                  <button @click="deleteTicket(t.id)" class="btn-danger">Delete</button>
                </div>
              </footer>
            </article>
          </div>

          <div v-if="editing" class="edit-modal" role="dialog" aria-modal="true">
            <h3>Edit Ticket</h3>
            <TicketForm 
              :initial="editing" 
              @save="updateTicket" 
              @cancel="editing = null" 
            />
          </div>
        </section>
      </section>

      <div v-if="toast" class="toast">{{ toast }}</div>
    </main>
    <div class="decor-circle decor-circle--large" aria-hidden="true"></div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import TicketForm from '../components/TicketForm.vue'
import { loadTickets, saveTickets } from '../store/storage'

export default {
  name: 'Ticket',
  components: {
    NavBar,
    TicketForm
  },
  data() {
    return {
      tickets: loadTickets(),
      editing: null,
      toast: ""
    }
  },
  watch: {
    tickets: {
      handler(newTickets) {
        saveTickets(newTickets)
      },
      deep: true
    }
  },
  methods: {
    createTicket(data) {
      const newTicket = {
        id: crypto.randomUUID(),
        ...data,
        createdAt: Date.now()
      }
      this.tickets = [newTicket, ...this.tickets]
      this.triggerToast("Ticket created")
    },
    updateTicket(data) {
      this.tickets = this.tickets.map(t => 
        t.id === this.editing.id ? { ...t, ...data } : t
      )
      this.editing = null
      this.triggerToast("Ticket updated")
    },
    deleteTicket(id) {
      if (!confirm("Delete this ticket?")) return
      this.tickets = this.tickets.filter(t => t.id !== id)
      this.triggerToast("Ticket deleted")
    },
    setEditing(ticket) {
      this.editing = ticket
    },
    triggerToast(msg) {
      this.toast = msg
      setTimeout(() => {
        this.toast = ""
      }, 2000)
    }
  }
}
</script>