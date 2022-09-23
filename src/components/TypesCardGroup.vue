<script>
export default {
  props: {
    cardGroupTitle: String,
    columnOneTitle: String,
    columnOneData: Array,
    columnTwoTitle: String,
    columnTwoData: Array,
    columnThreetitle: String,
    columnThreeData: Array,
  },
};
</script>

<template>
  <div class="col-lg-6 mb-4 damage-and-moves">
    <div class="card-header-custom">
      <h2>{{ cardGroupTitle }}</h2>
    </div>

    <div class="card-group">
      <div class="card mt-0">
        <div class="card-body">
          <h5 class="card-title">{{ columnOneTitle }}</h5>
          <p v-for="item in columnOneData" :key="item" class="card-text">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="card mt-0">
        <div class="card-body">
          <h5 class="card-title">{{ columnTwoTitle }}</h5>
          <p v-for="item in columnTwoData" :key="item" class="card-text">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="card mt-0">
        <div class="card-body">
          <h5 class="card-title">{{ columnThreetitle }}</h5>
          <p v-for="item in columnThreeData" :key="item" class="card-text">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
