<script>
// import axios from "axios";

import axios from "axios";

export default {
  data: function () {
    return {
      currentType: {},
    };
  },
  created: function () {
    axios.get("/types/" + this.$route.params.name).then((response) => {
      console.log("show type", response);
      this.currentType = response.data;
    });
  },
};
</script>

<template>
  <div class="types-show">
    <h1>{{ currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1) }}</h1>
    <p>{{ currentType.damage_relations["double_damage_from"] }}</p>
  </div>
</template>
