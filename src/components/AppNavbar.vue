<template>
  <nav class="navbar">
    <a class="navbar-home-link" href="/">
      <div class="navbar-title-1">Type</div>
      <div class="navbar-title-2">Checkr</div>
    </a>
  </nav>
  <router-view />
</template>

<style>
.navbar {
  padding: 30px;
  background-color: #e3313f;
}

.navbar-home-link {
  display: flex;
  font-size: 40px;
  font-weight: bold;
  color: #2c3e50;
}

.navbar-title-1 {
  color: white;
}
.navbar-title-2 {
  font-family: "Bungee Outline", cursive;
  color: white;
}
</style>
