<script>
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
    <div class="col-lg-6 mb-4 pokemon-with-type">
      <div class="card">
        <h2 class="card-header-custom border-bottom">{{ cardTitle }}</h2>
        <div class="card-body">
          <p class="card-text">
            <img id="sprites" class="poke-image" v-for="image in spriteUrls" :key="image" :src="image.url" />
          </p>
          <p class="card-text">
            <small class="text-muted">{{ pokemonInTotal }} pokemon in total</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
