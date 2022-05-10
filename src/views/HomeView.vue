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
    filterTypes: function () {
      return this.types.filter((type) => {
        var lowerName = type.name.toLowerCase();
        var lowerNameFilter = this.nameFilter.toLowerCase();
        return lowerName.includes(lowerNameFilter);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="/">Type Checkr</a>
    </nav>

    <div class="container">
      <h1 class="hero-title">Find What You're Looking For</h1>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="enter type name"
          aria-label="Search"
          v-model="nameFilter"
          list="names"
        />

        <datalist id="names">
          <option v-for="type in types" :key="type.id">{{ type.name }}</option>
        </datalist>
      </form>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="type in filterTypes()" :key="type.id" class="col-12 col-md-4">
          <div class="card mt-4" style="width: 20rem">
            <a :href="`/types/show/${type.name}`">
              <img class="card-img-top" :src="type.image_url" :alt="type.name" style="width: 5rem; padding-top: 1rem" />
            </a>
            <div class="card-body">
              <h5 class="card-title">{{ type.name.charAt(0).toUpperCase() + type.name.slice(1) }}</h5>
              <p class="card-text">
                Weaknesses: {{ type.damage_relations_overview.weaknesses }}
                <br />
                Super-effective: {{ type.damage_relations_overview.strengths }}
                <br />
                Neutral damage from: {{ type.damage_relations_overview.neutral }}
                <br />
                Number of moves: {{ type.moves_with_type }}
                <br />
                Pokemon with type: {{ type.pokemon_with_type }}
              </p>
              <a :href="`/types/show/${type.name}`" class="btn btn-info">details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img:hover {
  filter: saturate(200%);
  transform: scale(1.1);
  cursor: pointer;
}

.form-inline {
  padding-bottom: 20px;
}
</style>
