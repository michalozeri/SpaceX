<template>
  <div class="home">
    <landing-filter @filtered="setFilter" />
    <landing-list />
  </div>
</template>

<script>
// @ is an alias to /src
import landingList from "@/components/landing-list.vue";
import landingFilter from '@/components/landing-filter.vue'

export default {
  name: "Home",
  created(){
    this.$store.dispatch({type: 'loadLandings'})
  },
  methods:{
 setFilter(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
      this.$store.dispatch({type: 'loadLandings'})
    },
  },
  components: {
    landingList,
    landingFilter
  },
};
</script>
