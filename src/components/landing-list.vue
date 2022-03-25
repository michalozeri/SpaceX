
<template>
  <section class="landing-list">
<ul v-if="landings">
  <li v-for="landing in landings" :key="landing.id">
     <router-link :to=" '/details/' + landing.id">
     <landing-preview :landing="landing"></landing-preview>
     </router-link>
    
  </li>
</ul>
  </section>
</template>

<script>
import landingPreview from './landing-preview.vue'

export default {
  name: 'landing-list',
  data() {
    return {
    };
  },
  created() {
  
 
  },
  methods: {
    
  },
  computed:{
      landings() {
            return this.$store.getters.landingsToShow
        },
  },
  components:{
    landingPreview,
  }
};
</script>

