<template>
  <nav class="navbar navbar-light justify-content-between">
    <a class="navbar-brand" href="/types">
      <span class="brand1">Type</span>
      <span class="brand2">Dex</span>
    </a>
  </nav>
  <router-view />
</template>

<style>
/* eslint-disable */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

span.brand1 {
  color: white;
}
span.brand2 {
  font-family: "Press Start 2P", cursive;
  padding-left: 5px;
  color: white;
}

.navbar {
  background-color: #e3313f;
}

@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee&display=swap");
</style>
