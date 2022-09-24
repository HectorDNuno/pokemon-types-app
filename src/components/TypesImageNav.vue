<template>
  <div class="img-nav">
    <table class="img-nav-table">
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>
            <a href="/types/show/bug">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg"
                alt="bug"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/dark">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg"
                alt="dark"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/dragon">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"
                alt="dragon"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/electric">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg"
                alt="electric"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/fairy">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg"
                alt="fairy"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/fighting">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg"
                alt="fighting"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/fire">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"
                alt="fire"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/flying">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg"
                alt="flying"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/ghost">
              <img
                class="img-nav-images"
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
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"
                alt="grass"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/ground">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"
                alt="ground"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/ice">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"
                alt="ice"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/normal">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"
                alt="normal"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/poison">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"
                alt="poison"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/psychic">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"
                alt="psychic"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/rock">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"
                alt="rock"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/steel">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"
                alt="steel"
              />
            </a>
          </td>
          <td>
            <a href="/types/show/water">
              <img
                class="img-nav-images"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"
                alt="water"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.img-nav {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.img-nav-table {
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  width: 30rem;
}

.img-nav-images {
  margin: 10px;
  width: 50px;
}

.img-nav-images:hover {
  filter: saturate(200%);
  transform: scale(1.5);
  cursor: pointer;
}
</style>
