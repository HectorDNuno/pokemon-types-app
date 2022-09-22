<script>
import axios from "axios";
import TypesImageNav from "../components/TypesImageNav.vue";

export default {
  components: {
    TypesImageNav,
  },

  data: function () {
    return {
      currentType: [],
      mainTypeImage: "",
      allTypes: [],
      pokemonUrls: [],
      spriteUrls: [],
      shinySpriteUrls: [],
      moveUrls: [],
      moveData: [],
    };
  },

  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      this.currentType = response.data;
      axios.get("/types.json").then((type) => {
        this.allTypes = type.data;
        this.allTypes.forEach((type) => {
          if (this.currentType.name === type.name) {
            this.mainTypeImage = type.image_url;
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

    getPokemonSprites: function () {
      this.pokemonUrls.forEach((url) => {
        axios.get(url).then((response) => {
          let pokemonResponse = response.data;
          let sprites = { id: pokemonResponse.id, shiny: false, url: pokemonResponse.sprites.front_default };
          this.spriteUrls.push(sprites);
          this.spriteUrls.sort(function (a, b) {
            return a.id - b.id;
          });
        });
      });
      console.log("sprites", this.spriteUrls);
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

  watch: {
    currentType() {
      this.getPokemonUrls();
      this.getMoveUrls();
      this.getPokemonSprites();
      this.getMoveData();
    },
  },
};
</script>

<template>
  <div class="types-show-container">
    <TypesImageNav />

    <div class="title">
      <img class="type-image" :src="mainTypeImage" :alt="mainTypeImage" />
      <h1 class="type-name">{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
    </div>

    <div class="row">
      <div class="col-lg-6 mb-4 pokemon-with-type">
        <div class="card">
          <h2 class="card-header-custom border-bottom">Pokémon with type</h2>
          <div class="card-body">
            <p class="card-text">
              <img id="sprites" class="poke-image" v-for="image in spriteUrls" :key="image" :src="image.url" />
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
</template>

<style>
.card-group {
  padding-bottom: 2rem;
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
  font-family: "Bungee", sans-serif;
}

.card-header-custom {
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  font-family: "Bungee", sans-serif;
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
  font-family: "Bungee", sans-serif;
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
  font-family: "Bungee", sans-serif;
}
</style>
