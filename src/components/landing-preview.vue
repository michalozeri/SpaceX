<template>
  <div class="landing-preview">
      <h1>{{landing.name}}</h1>
      <img :src="landing.links.patch.small" alt="">
  </div>
</template>

<script>
export default {
    name: 'landing-preview',
    props: ['landing'],
    data(){
      return {
        
      }
    },
}
</script>