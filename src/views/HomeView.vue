<script>
import axios from "axios";

export default {
  data: function () {
    return {
      types: [],
      nameFilter: "",
    };
  },
  created: function () {
    axios.get("/types.json").then((response) => {
      this.types = response.data;
      console.log("all types", response.data);
    });
  },
  methods: {
    // filterTypes: function () {
    //   return this.types.filter((types) => {
    //     var lowerName = types.name.toLowerCase();
    //     var lowerNameFilter = this.nameFilter.toLowerCase();
    //     return lowerName.includes(lowerNameFilter);
    //   });
    // },
  },
};
</script>

<template>
  <div class="home">
    <div v-for="type in types" :key="type.id">
      <h4>
        {{ type.name.charAt(0).toUpperCase() + type.name.slice(1) }}
      </h4>
      <img :src="type.image_url" :alt="type.name" />
      <p>Weaknesses: {{ type.damage_relations_overview.weaknesses }}</p>
      <p>Super-effective: {{ type.damage_relations_overview.strengths }}</p>
      <p>Neutral damage from: {{ type.damage_relations_overview.neutral }}</p>
      <p>Number of moves: {{ type.moves_with_type }}</p>
      <p>Pokemon with type: {{ type.pokemon_with_type }}</p>
      <a :href="`/types/show/${type.name}`">go to type page</a>
    </div>
  </div>
</template>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
