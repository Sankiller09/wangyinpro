<template>
  <div class="appContainer">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'app',
    components:{FooterGuide}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    
</style>

