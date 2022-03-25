<template>
  <div class="landing-filter">
    <label for="sucsses">
      Filter Landings By:
      <select
        name="sucsses"
        id="sucsses"
        @change="setFilter"
        v-model="filterBy"
      >
        <option value="all">All</option>
        <option value="true">Landed Successfuly</option>
        <option value="false">Failed To Land</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "landing-filter",
  data() {
    return {
      filterBy: "all",
    };
  },
  methods: {
    setFilter() {
      this.$emit("filtered", this.filterBy);
    },
  },
};
</script>