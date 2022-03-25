<template>
  <section class="landing-details">
    <div class="details" v-if="currLanding">
    <button @click="goBack">✖</button>
    <div class="landing-container">
      <h1>{{ currLanding.name }}</h1>
      <div class="landing-info">
          <img :src="currLanding.links.patch.small" alt="" />
        <div class="info">
          <p><b>Time of the landing:</b> {{ currLanding.date_local }}</p>
          <p v-if="currLanding.details"><b>Details:</b> {{ currLanding.details }}</p>
          <p v-if="currLanding.failures > 0"><b>Failures:</b> {{ failures }}</p>
          <p><b>Flight Number:</b> {{ currLanding.flight_number }}</p>
          <a target="_blank" :href="currLanding.links.wikipedia">More Info Here</a>
        </div>
      </div>
      <div class="video-preview" v-if="landingId">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${currLanding.links.youtube_id}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </div>
    <carousel-landing class="carousel" @getDetails="setId"/>
  </section>
</template>

<script>
import carouselLanding from '../components/carousel-landing.vue'
export default {
  name: "landing-details",

  data() {
    return {
      currLanding: null,
      failures: null,
    };
  },
  created() {
    this.getCurrLanding();
    console.log(this.landingId);
    console.log(this.currLanding);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    getCurrLanding() {
      const landing = this.landings.find((landing) => {
        return landing.id === this.landingId;
      });
      this.currLanding = landing;
    },
    getFailures() {
      this.landings.forEach((landing) => {
        landing.failures.forEach((failure) => {
          this.failures.push(failure.reason);
        });
      });
    },
    setId(landingId){
       const landing = this.landings.find((landing) => {
        return landing.id === landingId;
      });
      this.currLanding = landing; 
    }
  },
  computed: {
    landingId() {
      return this.$route.params.landingId;
    },
    landings() {
      return this.$store.getters.landings;
    },
  },
  components:{
    carouselLanding
  }
};
</script>