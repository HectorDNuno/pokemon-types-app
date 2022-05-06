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
      console.log("all types", response.data);
    });
  },
};
</script>

<template>
  <div class="home">
    <div v-for="type in types" :key="type.id">
      <h4>
        {{ type.name.charAt(0).toUpperCase() + type.name.slice(1) }}
      </h4>
      <p>Weaknesses: {{ type.damage_relations_overview.weaknesses }}</p>
      <p>Super-effective: {{ type.damage_relations_overview.strengths }}</p>
      <p>Neutral damage from: {{ type.damage_relations_overview.neutral }}</p>
      <p>Number of moves: {{ type.moves_with_type }}</p>
      <p>Pokemon with type: {{ type.pokemon_with_type }}</p>
      <a :href="`/types/show/${type.name}`">go to type page</a>
    </div>
  </div>
</template>
