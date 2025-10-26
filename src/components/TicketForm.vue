<template>
  <form @submit.prevent="submit" class="ticket-form">
    <label>Title</label>
    <input v-model="title" />
    <p v-if="errors.title" class="error">{{ errors.title }}</p>

    <label>Status</label>
    <select v-model="status">
      <option v-for="s in STATUS" :key="s" :value="s">{{ s }}</option>
    </select>
    <p v-if="errors.status" class="error">{{ errors.status }}</p>

    <label>Description (optional)</label>
    <textarea v-model="description" rows="4"></textarea>

    <div class="form-actions">
      <button class="btn-primary" type="submit">Save</button>
      <button v-if="onCancel" type="button" class="btn-ghost" @click="onCancel">Cancel</button>
    </div>
  </form>
</template>

<script>
const STATUS = ["open", "in_progress", "closed"]

export default {
  name: 'TicketForm',
  props: {
    initial: {
      type: Object,
      default: () => ({})
    },
    onCancel: {
      type: Function,
      default: null
    }
  },
  emits: ['save'],
  data() {
    return {
      STATUS,
      title: this.initial.title || "",
      status: this.initial.status || "open",
      description: this.initial.description || "",
      errors: {}
    }
  },
  watch: {
    initial: {
      handler(newInitial) {
        this.title = newInitial.title || ""
        this.status = newInitial.status || "open"
        this.description = newInitial.description || ""
      },
      deep: true
    }
  },
  methods: {
    validate() {
      const err = {}
      if (!this.title.trim()) err.title = "Title is required"
      if (!STATUS.includes(this.status)) err.status = "Invalid status"
      if (this.description && this.description.length > 1000) err.description = "Description too long"
      this.errors = err
      return Object.keys(err).length === 0
    },
    submit() {
      if (!this.validate()) return
      this.$emit('save', {
        title: this.title.trim(),
        status: this.status,
        description: this.description.trim()
      })
      // Reset form if it's a create form (no initial data)
      if (!this.initial.id) {
        this.title = ""
        this.status = "open"
        this.description = ""
      }
    }
  }
}
</script>