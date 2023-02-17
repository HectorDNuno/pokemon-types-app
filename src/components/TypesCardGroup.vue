<script>
/* eslint-disable */
export default {
  props: {
    cardGroupTitle: String,
    columnOneTitle: String,
    columnOneData: Array,
    columnTwoTitle: String,
    columnTwoData: Array,
    columnThreeTitle: String,
    columnThreeData: Array,
  },
};
</script>

<template>
  <div class="card-group-container">
    <div class="card-header">{{ cardGroupTitle }}</div>
    <div class="card-group mb-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ columnOneTitle }}</h5>
          <p class="card-text" v-for="item in columnOneData" :key="item">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ columnTwoTitle }}</h5>
          <p class="card-text" v-for="item in columnTwoData" :key="item">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ columnThreeTitle }}</h5>
          <p class="card-text" v-for="item in columnThreeData" :key="item">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-header {
  font-family: "Bungee", sans-serif;
  font-size: 25px;
  background-color: white !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
