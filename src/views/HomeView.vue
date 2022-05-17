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
    <div class="container">
      <h1 class="hero-title">Checkr</h1>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
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

      <div class="row justify-content-between">
        <div v-for="type in filterTypes()" :key="type.id" class="col-12 col-sm-4">
          <div class="card mt-5">
            <a :href="`/types/show/${type.name}`">
              <img class="card-img-top" :src="type.image_url" :alt="type.name" style="width: 5rem; padding-top: 1rem" />
              <div class="card-body">
                <h6 class="card-title home">{{ type.name.charAt(0).toUpperCase() + type.name.slice(1) }}</h6>
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
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

.card-title.home {
  font-family: "Press Start 2P";
}

.hero-title {
  font-family: "Bungee Shade", cursive;
  color: white;
  font-size: 60px;
  padding-top: 15px;
}

img.card-img-top:hover {
  filter: saturate(200%);
  transform: scale(1.1);
  cursor: pointer;
}

.card {
  width: 90%;
}

.form-inline {
  padding-bottom: 20px;
  padding-top: 20px;
}

.container {
  padding-bottom: 5rem;
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration: none;
}

a:active {
  color: black;
  text-decoration: none;
}
</style>
