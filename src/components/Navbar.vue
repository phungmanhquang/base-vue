<template>
  <nav class="navbar navbar-light bg-default navbar-expand-lg">
    <router-link
      to="/"
      class="navbar-brand router-link-exact-active router-link-active"
    >
      <img
        src="/img/vue-boilerplates.svg"
        alt="Vue Boilerplates"
        height="30px"
        width="auto"
        class="d-inline-block align-top"
      />
      Vue Boilerplates
    </router-link>
    <button
      type="button"
      aria-label="Toggle navigation"
      class="navbar-toggler collapsed"
      aria-expanded="false"
      aria-controls="nav-collapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      id="nav-collapse"
      class="navbar-collapse collapse"
      style="display: none;"
    >
      <ul class="navbar-nav"></ul>
      <ul class="navbar-nav ml-auto">
        <li right="" class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li right="" class="nav-item">
          <router-link to="/about" class="nav-link">
            About
          </router-link>
        </li>
        <li right="" class="nav-item">
          <router-link to="/banner" class="nav-link">
            Banner
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
