<template>
    <div id="app">
       <ul>
         <router-link to="/adress" active-class="active" tag="li">adress</router-link>
         <router-link to="/promote" active-class="active" tag="li">promote</router-link>
         <router-link to="/prodetil" active-class="active" tag="li">prodetil</router-link>
         <router-link to="/collect" active-class="active" tag="li">collect</router-link>
         <router-link to="/about" active-class="active" tag="li">about</router-link>
       </ul>
    </div>
</template>

<script>
    export default {
        name:"teanav"
    }
</script>

<style scoped>
  ul li{
    float: left;
    list-style: none;
    margin: 30px;
  }
  ul{
    display: inline-block;
  }
</style>
