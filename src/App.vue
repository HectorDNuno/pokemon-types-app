<template>
  <nav class="navbar navbar-light justify-content-between">
    <a class="navbar-brand" href="/">
      <span class="brand1">Type</span>
      <span class="brand2">Checkr</span>
    </a>
  </nav>
  <router-view />
</template>

<style>
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

nav a.router-link-exact-active {
  color: #42b983;
}

.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the "active" element to highlight the current page */
.topnav a.active {
  background-color: #2196f3;
  color: white;
}

/* Style the search box inside the navigation bar */
.topnav input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
span.brand1 {
  color: white;
}
span.brand2 {
  font-family: "Bungee Shade", cursive;
  padding-left: 5px;
  color: white;
}

.navbar {
  background-color: #e3313f;
}
</style>
