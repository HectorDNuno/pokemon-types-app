<script>
import axios from "axios";
import TypesImageNav from "@/components/TypesImageNav.vue";
import TypesCard from "@/components/TypesCard.vue";
import TypesCardGroup from "@/components/TypesCardGroup.vue";

export default {
  components: {
    TypesImageNav,
    TypesCard,
    TypesCardGroup,
  },

  data() {
    return {
      currentType: [],
      mainTypeImage: "",
      allTypes: [],
      pokemonUrls: [],
      spriteUrls: [],
      shinySpriteUrls: [],
      moveUrls: [],
      allPhysicalMoves: [],
      allSpecialMoves: [],
      allStatusMoves: [],
    };
  },

  created() {
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
    getPokemonUrls() {
      this.currentType.pokemon.forEach((pokemon) => {
        this.pokemonUrls.push(pokemon.pokemon.url);
      });
    },

    getPokemonSprites() {
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
    },

    getMoveUrls() {
      this.currentType.moves.forEach((move) => {
        this.moveUrls.push(move.url);
      });
    },

    getMoveData() {
      this.moveUrls.forEach((url) => {
        axios.get(url).then((response) => {
          let moveResponse = response.data;
          let physicalMoves = {};
          let specialMoves = {};
          let statusMoves = {};
          if (moveResponse.damage_class.name === "physical") {
            physicalMoves["name"] = moveResponse.name;
            this.allPhysicalMoves.push(physicalMoves);
          } else if (moveResponse.damage_class.name === "special") {
            specialMoves["name"] = moveResponse.name;
            this.allSpecialMoves.push(specialMoves);
          } else if (moveResponse.damage_class.name === "status") {
            statusMoves["name"] = moveResponse.name;
            this.allStatusMoves.push(statusMoves);
          }
        });
      });
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
  <div class="types-view">
    <TypesImageNav />

    <div class="types-view-header">
      <img class="type-image" :src="mainTypeImage" :alt="mainTypeImage" />
      <h1 class="type-name">{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
    </div>

    <div class="container cards-container">
      <div class="row">
        <div class="col-6">
          <TypesCard :spriteUrls="spriteUrls" :pokemonInTotal="pokemonUrls.length" cardTitle="Pokémon With Type" />
        </div>
        <div class="col-6">
          <div class="card-group-container">
            <TypesCardGroup
              cardGroupTitle="Recieves Damage From"
              columnOneTitle="Double"
              :columnOneData="currentType.damage_relations.double_damage_from"
              columnTwoTitle="Half"
              :columnTwoData="currentType.damage_relations.half_damage_from"
              columnThreetitle="No Effect"
              :columnThreeData="currentType.damage_relations.no_damage_from"
            />

            <TypesCardGroup
              cardGroupTitle="Deals Damage To"
              columnOneTitle="Double"
              :columnOneData="currentType.damage_relations.double_damage_to"
              columnTwoTitle="Half"
              :columnTwoData="currentType.damage_relations.half_damage_to"
              columnThreetitle="No Effect"
              :columnThreeData="currentType.damage_relations.no_damage_to"
            />

            <TypesCardGroup
              cardGroupTitle="Moves with type"
              columnOneTitle="Physical"
              :columnOneData="allPhysicalMoves"
              columnTwoTitle="Special"
              :columnTwoData="allSpecialMoves"
              columnThreetitle="Status"
              :columnThreeData="allStatusMoves"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.types-view-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.type-image {
  width: 10%;
}

.type-name {
  color: white;
  margin-left: 20px;
  font-family: "Bungee", sans-serif;
}
</style>
