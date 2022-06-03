<script>
/* eslint-disable */
import axios from "axios";

export default {
  data: function () {
    return {
      currentType: [],
      typeImage: "",
      allTypes: [],
      pokemonUrls: [],
      imageUrls: [],
      shinyImageUrls: [],
      moveUrls: [],
      moveData: [],
    };
  },
  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      console.log("show type", response.data);
      this.currentType = response.data;
      axios.get("/types.json").then((type) => {
        this.allTypes = type.data;
        console.log("all types", type.data);
        type.data.forEach((type) => {
          if (this.currentType.name === type.name) {
            this.typeImage = type.image_url;
          }
        });
      });
    });
  },
  methods: {
    getPokemonUrls: function () {
      this.currentType.pokemon.forEach((pokemon) => {
        this.pokemonUrls.push(pokemon.pokemon.url);
      });
      console.log("pokemon urls", this.pokemonUrls);
    },
    getPokemonImages: function () {
      this.pokemonUrls.forEach((url) => {
        axios.get(url).then((response) => {
          let pokemonResponse = response.data;
          let sprites = { id: pokemonResponse.id, shiny: false, url: pokemonResponse.sprites.front_default };
          this.imageUrls.push(sprites);
          this.imageUrls.sort(function (a, b) {
            return a.id - b.id;
          });
        });
      });
      console.log("sprites", this.imageUrls);
    },
    getMoveUrls: function () {
      this.currentType.moves.forEach((move) => {
        this.moveUrls.push(move.url);
      });
      console.log("move urls", this.moveUrls);
    },
    getMoveData: function () {
      this.moveUrls.forEach((url) => {
        axios.get(url).then((response) => {
          let moveResponse = response.data;
          let obj = {};
          obj[moveResponse.damage_class.name] = moveResponse.name;
          this.moveData.push(obj);
        });
      });
      console.log("move data", this.moveData);
    },
  },

  mounted: function () {
    this.getPokemonImages();
    this.getMoveData();
  },
  watch: {
    currentType() {
      this.getPokemonUrls();
      this.getMoveUrls();
    },
  },
};
</script>

<template>
  <div class="types-show">
    <div class="container">
      <div class="img-navbar">
        <table>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <a href="/types/show/bug">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg"
                    alt="bug"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/dark">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg"
                    alt="dark"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/dragon">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"
                    alt="dragon"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/electric">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg"
                    alt="electric"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/fairy">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg"
                    alt="fairy"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/fighting">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg"
                    alt="fighting"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/fire">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"
                    alt="fire"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/flying">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg"
                    alt="flying"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/ghost">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg"
                    alt="ghost"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <a href="/types/show/grass">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"
                    alt="grass"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/ground">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"
                    alt="ground"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/ice">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"
                    alt="ice"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/normal">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"
                    alt="normal"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/poison">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"
                    alt="poison"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/psychic">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"
                    alt="psychic"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/rock">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"
                    alt="rock"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/steel">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"
                    alt="steel"
                  />
                </a>
              </td>
              <td>
                <a href="/types/show/water">
                  <img
                    class="nav-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"
                    alt="water"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title">
        <img class="type-image" :src="typeImage" :alt="typeImage" />
        <h1 class="type-name">{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4 pokemon-with-type">
          <div class="card">
            <h2 class="card-header-custom border-bottom">Pokémon with type</h2>
            <div class="card-body">
              <p class="card-text">
                <img id="sprites" class="poke-image" v-for="image in imageUrls" :key="image" :src="image.url" />
              </p>
              <p class="card-text">
                <small class="text-muted">{{ pokemonUrls.length }} pokemon in total</small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4 damage-and-moves">
          <div class="card-header-custom">
            <h2>Damage from</h2>
          </div>
          <div class="card-group">
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">Double</h5>
                <p v-for="type in currentType.damage_relations.double_damage_from" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p class="none" v-if="!this.currentType.damage_relations.double_damage_from.length">None</p>
              </div>
            </div>
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">Half</h5>
                <p v-for="type in currentType.damage_relations.half_damage_from" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p v-if="!this.currentType.damage_relations.half_damage_from.length">None</p>
              </div>
            </div>
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">No effect</h5>
                <p v-for="type in currentType.damage_relations.no_damage_from" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p v-if="!this.currentType.damage_relations.no_damage_from.length">None</p>
              </div>
            </div>
          </div>
          <div class="card-header-custom">
            <h2>Damage to</h2>
          </div>
          <div class="card-group">
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">Double</h5>
                <p v-for="type in currentType.damage_relations.double_damage_to" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p v-if="!this.currentType.damage_relations.double_damage_to.length">None</p>
              </div>
            </div>
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">Half</h5>
                <p v-for="type in currentType.damage_relations.half_damage_to" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p v-if="!this.currentType.damage_relations.half_damage_to.length">None</p>
              </div>
            </div>
            <div class="card mt-0">
              <div class="card-body">
                <h5 class="card-title">No effect</h5>
                <p v-for="type in currentType.damage_relations.no_damage_to" :key="type.id" class="card-text">
                  {{ type.name }}
                </p>
                <p v-if="!this.currentType.damage_relations.no_damage_to.length">None</p>
              </div>
            </div>
          </div>
          <div class="card-header-custom">
            <h2>Moves with type</h2>
          </div>
          <div class="card-group pb-0">
            <div class="card moves mt-0">
              <div class="card-body">
                <h5 class="card-title">Physical</h5>
                <p class="card-text" v-for="move in moveData" :key="move">{{ move.physical }}</p>
              </div>
            </div>
            <div class="card moves mt-0">
              <div class="card-body">
                <h5 class="card-title">Special</h5>
                <p class="card-text" v-for="move in moveData" :key="move">{{ move.special }}</p>
              </div>
            </div>
            <div class="card moves mt-0">
              <div class="card-body">
                <h5 class="card-title">Status</h5>
                <p class="card-text" v-for="move in moveData" :key="move">{{ move.status }}</p>
              </div>
            </div>
          </div>
          <div class="card-footer-custom text-muted">
            <small class="text-muted">{{ moveUrls.length }} moves in total</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-group {
  padding-bottom: 2rem;
}

table {
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  width: 30rem;
}

.img-navbar {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

img.nav-img:hover {
  filter: saturate(200%);
  transform: scale(1.5);
  cursor: pointer;
}

img.poke-image {
  width: auto;
  height: auto;
}

img.poke-image:hover {
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

img.type-image {
  width: 10rem;
  padding-top: auto;
  padding-bottom: 3rem;
}

img.type-image:hover {
  filter: saturate(200%);
  transform: scale(1.1);
}

.card-header {
  font-family: "Bungee";
}

.card-header-custom {
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  font-family: "Bungee";
}

.card-header-custom + .card-group > .card {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.card-footer-custom {
  padding: 0.75rem 1.25rem;
  background-color: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  font-family: "Bungee";
}

.card.moves {
  border-bottom: none;
}

.title > img,
.title > h1 {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

.title > h1 {
  padding-left: 2rem;
  color: white;
  font-family: "Press Start 2P";
}
</style>
