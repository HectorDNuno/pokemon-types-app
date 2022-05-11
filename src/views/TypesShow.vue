<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentType: [],
      typeImage: "",
      allTypes: [],
    };
  },
  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      console.log("show type", response.data);
      this.currentType = response.data;
      axios.get("/types.json").then((type) => {
        this.allTypes = type.data;
        console.log("types", type.data);
        type.data.forEach((type) => {
          if (this.currentType.name === type.name) {
            this.typeImage = type.image_url;
          }
        });
      });
    });
  },
};
</script>

<template>
  <div class="types-show">
    <div class="container img-navbar">
      <table>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <a href="/types/show/bug">
                <img
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
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"
                  alt="grass"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/ground">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"
                  alt="ground"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/ice">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"
                  alt="ice"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/normal">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"
                  alt="normal"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/poison">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"
                  alt="poison"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/psychic">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"
                  alt="psychic"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/rock">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"
                  alt="rock"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/steel">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"
                  alt="steel"
                />
              </a>
            </td>
            <td>
              <a href="/types/show/water">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"
                  alt="water"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1>{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
    <img class="main-image" :src="typeImage" :alt="typeImage" />
  </div>

  <div class="container">
    <div class="damage-to">
      <span class="section-title"><h2>Damage to</h2></span>
      <div class="card-group">
        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">Double</h5>
            <p v-for="type in currentType.damage_relations.double_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.double_damage_to.length">None</p>
          </div>
        </div>

        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">Half</h5>
            <p v-for="type in currentType.damage_relations.half_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.half_damage_to.length">None</p>
          </div>
        </div>

        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">No effect</h5>
            <p v-for="type in currentType.damage_relations.no_damage_to" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.no_damage_to.length">None</p>
          </div>
        </div>
      </div>
    </div>
    <div class="damage-from">
      <span class="section-title"><h2>Damage from</h2></span>
      <div class="card-group">
        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">Double</h5>
            <p v-for="type in currentType.damage_relations.double_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.double_damage_from.length">None</p>
          </div>
        </div>

        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">Half</h5>
            <p v-for="type in currentType.damage_relations.half_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.half_damage_from.length">None</p>
          </div>
        </div>

        <div class="card mt-4 bg-light">
          <div class="card-body">
            <h5 class="card-title">No effect</h5>
            <p v-for="type in currentType.damage_relations.no_damage_from" :key="type.id" class="card-text">
              {{ type.name }}
            </p>
            <p v-if="!this.currentType.damage_relations.no_damage_from.length">None</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pokemon-and-moves">
      <h2>Pokémon with type:</h2>

      <p>
        {{
          Array.prototype.map
            .call(this.currentType.pokemon, function (pokemon) {
              return pokemon.pokemon.name;
            })
            .join(", ")
        }}
      </p>

      <h2>Moves with type:</h2>
      <p>
        {{
          Array.prototype.map
            .call(this.currentType.moves, function (moves) {
              return moves.name;
            })
            .join(", ")
        }}
      </p>
    </div>
  </div>
</template>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

div.container.img-navbar {
  padding-top: 30px;
}

img {
  width: 32px;
}

img.main-image {
  width: 10rem;
}

.card-group {
  display: flex;
}
</style>
