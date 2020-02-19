<template>
  <div class="homeContainer">
      <div class="handWraper">
        <div class="line">
          <a class="logo" href="/"></a>
          <div class="topSearch">
            <i class="iconfont icon-sousuo"></i>
            <span class="placeholder">搜索商品, 共20421款好物</span>
          </div>
          <div class="loginBtn">登录</div>
        </div>
        <div class="tapWrap">
          <div class="wrapper">
            <ul class="content">
              <li :class="{active:datas.index = index ? isShow:isOver}" class="contentItem" v-for="(item, index) in datas" :key="index">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div class="toggleWrap">
            <div class="icon"></div>
          </div>
        </div>
      </div> 
      <div class="slideWraper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b3782def13e1fbba9f08bf8545be15d0.png?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/72737f563f3570257bc058f05a9abc29.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/bbc9c62346668b9a178d0ed28f36374a.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/90adb66cddc4816c4d09c8a084919f1a.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/36929e72018bce053af17a80a262c4bb.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/43144bc5b1205064a16acd7672552830.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fab8d20a9f2f0917b0407d7975f88c9b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="midSlide">
        <ul class="midT">
          <li class="item">
            <div class="singelItem">
              <i class="one"></i>
              <span>网易自营品牌</span>
            </div>
          </li>
          <li class="item">
            <div class="singelItem">
              <i class="two"></i>
              <span>30天无忧退货</span>
            </div>
          </li>
          <li class="item">
            <div class="singelItem">
              <i class="three"></i>
              <span>48小时快速退款</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="bigContent">
        <div class="kingKongModule">
          <div class="kingContainer">
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
            <div class="kingItem" >
              <div class="icon">
                <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
              </div>
              <div class="txt">
                1
              </div>
            </div>
          </div>
        </div>
        <div class="bigContentTwo">
          <div class="floorTop">
            <span class="img">
              
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navigation from '../../common/datas/indexCateModule.json'
import kingKongModule from '../../common/datas/index.json'
import 'swiper/css/swiper.min.css' //记得引入swiper后,一定要引入样式! 否则不会生效
import BScroll from 'better-scroll'
import Swiper from 'swiper'
  export default {
    data() {
      return {
        datas:navigation,
        isShow:true,
        isOver:false,
        kingKong:kingKongModule
      }
    },
    mounted(){
      new BScroll('.wrapper',{
        scrollX:true
      })
      var mySwiper = new Swiper('.swiper-container',{
        // autoplay:true,// 可选选项,是否自动滑动
        pagination: {
           el: '.swiper-pagination',
        },
        loop:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .homeContainer
     .handWraper //第一部分
       height 148px
       .line
         height 88px
         display flex
         padding 16px 30px
         align-items center
         box-sizing border-box
         .logo
           background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
           background-size: cover
           width 138px
           height 40px
           margin-right 20px
         .topSearch
           width 442px
           height 56px
           background #ededed
           border-radius 8px
           align-items center
           justify-content center
           display flex
           font-size: .37333rem
           .placeholder
              color #666
           .iconfont
             width 28px
             height 28px
             vertical-align middle
             margin-right: .13333rem
         .loginBtn
           margin-left 16px
           width 74px
           height 40px
           line-height 40px
           text-align center
           color #dd1a2d
           border 1px solid #DD1A21
           font-size 24px
           border-radius: .10667rem
       .tapWrap
         height 60px
         display flex 
         .wrapper
           height 60px
           width 650px
           display flex
           overflow hidden
         .toggleWrap
             height 60px
             width 100px
           .icon
             background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp)
             background-size 100% 100%
             background-repeat no-repeat
             width 30px
             height 30px
             margin-top .2rem
             margin-left 50%
             transform translateX(-50%)
             vertical-align middle
             text-align center
           .content
             height 60px
             display flex
             flex-wrap nowrap
             white-space nowrap
             .contentItem
               width 144px
               height 60px
               align-items center
               margin-left: .26667rem
               font-size: .37333rem
               text-align center
               color #333
               display: inline-block;
               padding: 0 .21333rem;
               line-height: .8rem
               box-sizing border-box
               &.active
                 border-bottom .05333rem solid #DD1A21
                 color #DD1A21
     .slideWraper //第二部分
       height 370px
       .swiper-container
         width 100%
         .swiper-wrapper
           width 100%
           .swiper-slide
             width 750px
             height 370px
             img
              width 750px
              height 370px
     .midSlide //第三部分
       background #fff
       width 750px
       height 72px
       .midT
         width 750px
         height 72px
         padding 0 .4rem
         display flex
         align-items center
         box-sizing border-box
         .item
           flex 1
           float left
           vertical-align middle
           align-items center
           .singelItem
             display flex
             vertical-align middle
             align-items center 
             width 227px
             height 36px
             span
               margin-left .10667rem
             .one
               background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
               background-size 100% 100%
               width 32px
               height 32px
               display block
             .two
               background-image url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
               width 32px
               height 32px
               background-size 100% 100%
             .three
               background-image url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
               width 32px
               height 32px
               background-size 100% 100%

     .bigContent //第四部分
       .bigContentTwo
         width 750px
         height 828px
         overflow hidden
         box-sizing border-box
         .floorTop
            width 750px
            height 240px
            .img
              display block
              width 750px
              height 240px  
              background green
       .kingKongModule
         width 750px
         height 372px
         box-sizing border-box
         .kingContainer
           height 372px
           width 750px
           padding-bottom .42667rem
           box-sizing border-box
           .kingItem
             display block
             width 1.46667rem
             height 2.08rem
             margin .13333rem .26667rem 0
             float left
             margin-bottom: .12rem
             .icon
               width 100px
               height 100px
             .txt
                margin-top 18px
                text-align center
                font-size .32rem
                line-height .48rem
                white-space nowrap
                color #333
               .img
                width 1.46667rem
                height 1.46667rem
             
             
           
           
</style>
