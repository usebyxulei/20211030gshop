<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    },
    async mounted(){
      //this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    }
  }
</script>
<style lang="css">
  #app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
  }
</style>