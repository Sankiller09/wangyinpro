<template>
  <div id="footerContainer">
      <div :class="{active:$route.path === '/home'}" @click="goPath('/home')" class="guideItem">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
      </div>
      <div :class="{active:$route.path === '/sort'}" @click="goPath('/sort')" class="guideItem">
          <i class="iconfont icon-2"></i>
          <span>分类</span>
      </div>
      <div :class="{active:$route.path === '/worthtobuy'}" @click="goPath('/worthtobuy')" class="guideItem">
          <i class="iconfont icon-tupian"></i>
          <span>值得买</span>
      </div>
      <div :class="{active:$route.path === '/shop'}" @click="goPath('/shop')" class="guideItem">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
      </div>
      <div :class="{active:$route.path === '/personal'}" @click="goPath('/personal')" class="guideItem">
          <i class="iconfont icon-geren"></i>
          <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goPath(path){
              this.$router.push(path)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #footerContainer
      display flex
      position fixed
      left 0
      bottom 0
      width 100%
      height 98px
      border-top 1px solid #d9d9d9
      box-sizing border-box
      .guideItem
        width 20%
        height 71px
        text-align center
        display flex
        flex-direction column
        color #666
        &.active
          color #DD1A21
        span
          height 24px
          display block
          line-height 24px
          margin-top 5px
        .iconfont
          margin-top 13px
          font-size 40px
</style>
