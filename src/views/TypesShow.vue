<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentType: [],
      typeInfo: [],
    };
  },
  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      console.log("show type", response.data);
      this.currentType = response.data;
    });
    axios.get("/types.json").then((response) => {
      this.typeInfo = response.data;
      console.log("all types", response.data);
    });
  },
  methods: {
    getType: function () {
      axios.get("/types.json").then((response) => {
        this.typeInfo = response.data;
        console.log("all types", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="types-show">
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="/">Type Checkr</a>
    </nav>
    <h1>{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
    <!-- <img :src="typeInfo[0].image_url" :alt="typeInfo.name" /> -->
  </div>

  <div class="container">
    <div class="damage-to">
      <span class="section-title"><h2>Damage to</h2></span>
      <div class="card-group">
        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">Double</h5>
            <p v-for="type in currentType.damage_relations.double_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">Half</h5>
            <p v-for="type in currentType.damage_relations.half_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">No effect</h5>
            <p v-for="type in currentType.damage_relations.no_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="damage-from">
      <span class="section-title"><h2>Damage from</h2></span>
      <div class="card-group">
        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">Double</h5>
            <p v-for="type in currentType.damage_relations.double_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">Half</h5>
            <p v-for="type in currentType.damage_relations.half_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">No effect</h5>
            <p v-for="type in currentType.damage_relations.no_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pokemon-and-moves">
      <h2>Pokémon with type:</h2>

      <p>
        {{
          Array.prototype.map
            .call(this.currentType.pokemon, function (pokemon) {
              return pokemon.pokemon.name;
            })
            .join(", ")
        }}
      </p>

      <h2>Moves with type:</h2>
      <p>
        {{
          Array.prototype.map
            .call(this.currentType.moves, function (moves) {
              return moves.name;
            })
            .join(", ")
        }}
      </p>
    </div>
  </div>
</template>

<style>
img {
  width: 10rem;
}

.card-group {
  display: flex;
}
</style>
