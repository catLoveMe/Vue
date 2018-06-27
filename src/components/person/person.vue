<template>
  <section>
    <navigation></navigation>
    <title1 mainTitle="个人中心" subTitle="PersonCenter" :breadArg="breadArg"></title1>
    <div style="width: 80%;margin-left: 10%;margin-top: 5%">
    <p class="left">
      <router-link to="/personself" active-class="active">
        <span>个人信息 </span>
        <span class="diagonal">/</span>
      </router-link>
      <router-link to="/orderMess" active-class="active">
        <span>我的订单 </span>
        <span class="diagonal">/</span>
      </router-link>
        <router-link to="/collection" active-class="active">
      <span>我的收藏</span>
      <span class="diagonal">/</span>
        </router-link>
      <router-link to="/address" active-class="active"><span>收货地址管理</span></router-link>

      <span class="diagonal">/</span>
      <router-link to="/cartShop" active-class="active">
      <span>购物车</span>
      </router-link>
    </p>
    <router-view/>
    </div>
    <footerBlock></footerBlock>
  </section>
</template>

<script>
  import title from '../common/title.vue'
  import navigation from '../common/navigation.vue'
  import footerBlock from '../common/footer.vue'
    export default{
        name:'person',
      data: function () {
        return {
          breadArg:{
              firstTitle:"个人中心",
          }
        }
      },
      components:{
            title1:title,
        navigation:navigation,
        footerBlock:footerBlock
      }
    }
</script>

<style scoped>
  .left{
    margin-left: 8%;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .active{
    color: #8eb45e;
  }
  .diagonal{

  }
  p span{
    padding-left: 5%;
    text-align: center;
  }
</style>
