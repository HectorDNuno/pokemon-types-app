<template>
  <nav class="navbar navbar-light justify-content-between">
    <a class="navbar-brand" href="/">
      <div class="brand1">Type</div>
      <div class="brand2">Checkr</div>
    </a>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.brand1 {
  color: white;
}
.brand2 {
  font-family: "Bungee Outline", cursive;
  padding-left: 5px;
  color: white;
}

.navbar {
  background-color: #e3313f;
}
</style>
