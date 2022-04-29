<script>
import axios from "axios";

export default {
  data: function () {
    return {
      types: [],
    };
  },
  created: function () {
    axios.get("/types.json").then((response) => {
      this.types = response.data;
      console.log("all types", response);
    });
  },
};
</script>

<template>
  <div class="home">
    <div v-for="type in types" :key="type.id">
      <h4>
        {{ type.name }}
      </h4>
      <p>Overview: {{ type.damage_relations_overview }}</p>
      <p>Number of moves: {{ type.moves_with_type }}</p>
      <p>Pokemon: {{ type.pokemon_with_type }}</p>
      <p>Overview: {{ type.damage_relations_overview }}</p>
      <a :href="`/types/show/${type.name}`">go to type page</a>
    </div>
  </div>
</template>
