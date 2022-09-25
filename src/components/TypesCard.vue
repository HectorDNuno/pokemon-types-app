<script>
/* eslint-disable */
export default {
  props: {
    spriteUrls: Array,
    pokemonInTotal: Number,
    cardTitle: String,
  },
};
</script>

<template>
  <div class="types-card">
    <div class="card">
      <h2 class="card-header">{{ cardTitle }}</h2>
      <div class="card-body">
        <h5 class="card-title">{{ pokemonInTotal }} pokemon in total</h5>
        <p class="card-text">
          <img id="sprites" class="poke-image" v-for="image in spriteUrls" :key="image" :src="image.url" />
        </p>
        <p class="card-text">
          <small class="text-muted">{{ pokemonInTotal }} pokemon in total</small>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.types-card {
  font-family: "Bungee", sans-serif;
}

.poke-image {
  padding: 5px;
}

.poke-image:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
