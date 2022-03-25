<template>
 <section class="carousel-landing">
 <el-carousel :interval="3000" type="card" height="200px" direction="vertical"> 
    <el-carousel-item v-for="landing in landings" :key="landing.id">
     <div @click="getDetails(landing.id)" >
        <h1 class="medium">{{ landing.name }}</h1>
      <img :src="landing.links.patch.small" alt="">
     </div>
    </el-carousel-item>
  </el-carousel>
 </section>
</template>

<script>
export default{
  name: "carousel-landing",
  data(){
    return{
      landings:null
    }
  },
  created(){
    this.landings = this.$store.getters.landingsToShow
    console.log(this.landings);
  },
  methods:{
    getDetails(landingId){
      console.log('I was clicked', landingId);
  this.$emit('getDetails', landingId)
    }
  }
}
</script>

<style>
.carousel-landing{
  width: 650px;
  margin-top: 50px;
  max-height: 700px;
}
.el-carousel__item{
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
  .el-carousel__item h1 {
    color: #475669;
    font-size: 1.5rem;
    opacity: 0.75;
    line-height: 50px;
    margin: 0;
  }
 .el-carousel__item img{
   height: 150px;
 }
  .el-carousel__item:nth-child(2n) {
background-color: rgb(229, 226, 226);
    text-align: center;
  }

  .el-carousel__item:nth-child(2n+1) {
 background-color: rgb(245, 245, 245);
  }
</style>