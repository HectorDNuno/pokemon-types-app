<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      types: [],
      nameFilter: "",
    };
  },
  created() {
    axios.get("/types.json").then((response) => {
      this.types = response.data;
    });
  },
  methods: {
    filterTypes() {
      return this.types.filter((type) => {
        let lowerName = type.name.toLowerCase();
        let lowerNameFilter = this.nameFilter.toLowerCase();
        return lowerName.includes(lowerNameFilter);
      });
    },
    capitalizeHeader(header) {
      let upcaseHeader = header.charAt(0).toUpperCase() + header.slice(1);
      return upcaseHeader;
    },
  },
};
</script>

<template>
  <div class="home container">
    <form class="form-inline">
      <input
        class="form-control"
        type="search"
        placeholder="Search for types"
        aria-label="Search"
        v-model="nameFilter"
        list="names"
      />

      <datalist id="names" v-for="type in types" :key="type.id">
        <p>{{ type.name }}</p>
      </datalist>
    </form>

    <div class="row">
      <div v-for="type in filterTypes()" :key="type.id" class="col-12 col-sm-4">
        <div class="card mt-5">
          <a class="card-type-link" :href="`/types/show/${type.name}`">
            <div class="card-header border-bottom-0">{{ capitalizeHeader(type.name) }}</div>

            <img class="card-img-top" :src="type.image_url" :alt="type.name" style="width: 5rem; padding-top: 1rem" />

            <div class="card-body">
              <div class="card-text">
                <p class="card-type-info">Weaknesses: {{ type.damage_relations_overview.weaknesses }}</p>
                <p class="card-type-info">Super-effective: {{ type.damage_relations_overview.strengths }}</p>
                <p class="card-type-info">Neutral damage from: {{ type.damage_relations_overview.neutral }}</p>
                <p class="card-type-info">Number of moves: {{ type.moves_with_type }}</p>
                <p class="card-type-info">Pokemon with type: {{ type.pokemon_with_type }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 90%;
}

.card-img-top:hover {
  filter: saturate(200%);
  transform: scale(1.1);
  cursor: pointer;
}

p {
  font-family: "Bungee", sans-serif;
}

.card-type-info {
  margin-bottom: 0px;
}

.form-inline {
  padding-bottom: 20px;
  padding-top: 20px;
  width: 97%;
}

.container {
  padding-bottom: 5rem;
}

.card-type-link:link,
:visited,
:hover,
:active {
  color: black;
  text-decoration: none;
}
</style>
