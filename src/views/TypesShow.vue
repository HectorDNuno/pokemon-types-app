<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentType: {},
    };
  },
  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      console.log("show type", response.data);
      this.currentType = response.data;
    });
  },
};
</script>

<template>
  <div class="types-show">
    <h1>{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
  </div>

  <div class="damage-from">
    <p>double_damage_from:</p>
    <li v-for="type in currentType.damage_relations.double_damage_from" :key="type.id">
      {{ type.name }}
    </li>

    <p>half_damage_from:</p>
    <li v-for="type in currentType.damage_relations.half_damage_from" :key="type.id">
      {{ type.name }}
    </li>

    <p>no_damage_from:</p>
    <li v-for="type in currentType.damage_relations.no_damage_from" :key="type.id">
      {{ type.name }}
    </li>
  </div>

  <div class="damage-to">
    <p>double_damage_to:</p>
    <li v-for="type in currentType.damage_relations.double_damage_to" :key="type.id">
      {{ type.name }}
    </li>

    <p>half_damage_to:</p>
    <li v-for="type in currentType.damage_relations.half_damage_to" :key="type.id">
      {{ type.name }}
    </li>

    <p>no_damage_to:</p>
    <li v-for="type in currentType.damage_relations.no_damage_to" :key="type.id">
      {{ type.name }}
    </li>
  </div>

  <div>
    <p>Number of Pokémon with type:</p>
    <ol>
      <li v-for="pokemon in currentType.pokemon" :key="pokemon.id">{{ pokemon.pokemon.name }}</li>
    </ol>
  </div>

  <div>
    <p>Moves with type:</p>
    <ol>
      <li v-for="moves in currentType.moves" :key="moves.id">{{ moves.name }}</li>
    </ol>
  </div>
</template>
