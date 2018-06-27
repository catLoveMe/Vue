<template>
  <div class="shopPro">
    <img :src="imgsrc" alt="图片显示区域：宽（190），高（190）">
    <p class="shopName">{{ proname }}</p>
    <hr>
    <p class="shopPri">￥{{ price }}</p>
    <div class="shelter">
      <router-link to="/prodetial" class="p1"><span>&#xe613;</span></router-link>
      <p class="p2" @click="addToCart(pro_id)"><span>&#xe603;</span></p>
      <p class="p3" @click="addCollect(pro_id)"><span>&#xe751;</span></p>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'shopPro',
    components: {},
    data () {
      return {}
    },
    props: ['imgsrc','proname','price',"pro_id"],
    methods:{
      ...mapActions(['addToCart']),
      addCollect(item){
          console.log(item,"item=====");
        this.$axios.get('/api/addCollection.do',{params:{pro_id:item.pro_id}})
          .then(function (resp) {
            console.log(resp,"增加到购物车数据");
          })
      }
    }
  }
</script>
<style scoped>
  @font-face {
    font-family: "tea-font";
    src: url('../../assets/icon/tea.ttf');
  }
  .p1,.p2,.p3{
    text-align: center;
  }
  .shopPro{
    border: 1px solid #e4e4e4;
    width: 190px;
    height: 305px;
    position: relative;
    display: inline-block;
    margin:20px 12px;
  }
  .shopPro img{
    width: 190px;
    height: 190px;
  }
  .shopPro .shopName{
    font-size: 18px;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 5px;
    text-align: center;
  }
  .shopPro .shopPri{
    margin-top: 5px;
    font-style: oblique;
    text-align: center;
  }
  .shopPro hr{
    width: 15px;
    color: #ccc;
    margin: auto;
  }
  .shopPro .shelter{
    position: absolute;
    top: 0;
    left: 0;
    width: 190px;
    height: 305px;
    background-color: rgba(255,255,255,0.8);
    opacity: 0;
    transition: all .15s linear;
  }
  .shopPro:hover .shelter{
    box-shadow: 2px 2px 5px #c9c9c9;
    opacity: 1;
  }
  .shopPro .shelter .p1,.p2,.p3{
    width: 50px;
    height: 50px;
    background-color: #666;
    border-radius: 25px;
    cursor: pointer;
    display: inline-block;
    margin: 100px 3px;
    transition: all .1s linear;
    text-decoration: none;
  }
  .shopPro .shelter span{
    font-family: tea-font;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: white;
  }
  .shopPro .shelter .p1 span{
    width: 20px;
    height: 20px;
  }
  .shopPro .shelter .p2 span{
    width: 25px;
    height: 20px;
  }
  .shopPro .shelter .p3 span{
    width: 20px;
    height: 20px;
  }
  .shopPro .shelter .p1:hover,.p2:hover,.p3:hover{
    background-color: #7EAD54;
  }
</style>
