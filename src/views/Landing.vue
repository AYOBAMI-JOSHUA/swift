<template>
  <div>
    <main class="hero" role="main" aria-labelledby="hero-heading">
      <div class="site-wrapper hero-inner">
        <section class="hero-copy" aria-labelledby="hero-heading">
          <h1 id="hero-heading">SwiftTix</h1>
          <p class="lead">Manage tickets fast — create, update, and track issues with ease.</p>

          <div class="cta-row" role="group" aria-label="Call to action">
            <router-link to="/auth/login" class="btn-secondary">Login</router-link>
            <router-link to="/auth/signup" class="btn-outlin">Get Started</router-link>
          </div>
        </section>

        <aside class="hero-visual" aria-hidden="true">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </aside>
      </div>

      <svg class="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" opacity="0.35" />
      </svg>
    </main>

    <section class="features" aria-labelledby="features-heading">
      <div class="site-wrapper">
        <h2 id="features-heading" class="sr-only">Features</h2>

        <div class="features-grid" role="list">
          <article class="feature-card" role="listitem" aria-labelledby="f1-title">
            <h3 id="f1-title">Create &amp; Track Tickets</h3>
            <p>
              Create tickets quickly and assign status. Keep a clear backlog and follow progress through every stage until resolution.
            </p>
          </article>

          <article class="feature-card" role="listitem" aria-labelledby="f2-title">
            <h3 id="f2-title">Stay Organized &amp; Efficient</h3>
            <p>
              Manage priorities, track timelines, and resolve issues faster with a clean, focused workflow built for teams.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>