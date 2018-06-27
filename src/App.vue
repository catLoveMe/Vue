<template>
  <div id="app">
    <!--<teaAdopt></teaAdopt>-->
    <!--<baidumap></baidumap>-->
    <!--<index></index>-->
    <!--<about></about>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import navigation from "./components/common/navigation.vue"
  import titleShow from "./components/common/title.vue"
  import teaAdopt from "./components/teaAdopt.vue"
  import map from "./components/common/map.vue"
  import index from "./components/index.vue"
  import about from "./components/about/about.vue"
  export default {
    name: 'app',
    components:{
      navigation:navigation,
      titleShow:titleShow,
      teaAdopt:teaAdopt,
      baidumap:map,
      index:index,
      about:about
    },
    data:function () {
      return {
      }
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  body{
    margin: 0;
  }
</style>
