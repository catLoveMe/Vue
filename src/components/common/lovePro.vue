<template>
  <div class="shopPro">
    <p class="pimg"><span @click="moveCollect(item)">&#xe751;</span></p>
    <img :src="imgsrc" alt="图片显示区域：宽（190），高（190）">
    <p class="shopName">{{ proname }}</p>
    <hr>
    <p class="shopPri">￥{{ price }}</p>
    <div class="shelter">
      <!--<router-link  class="p1"><span>&#xe613;</span></router-link>-->
     <router-link to="/prodetial" ><p class="p1"><span>&#xe613;</span></p></router-link>
      <p class="p2" @click="addToCart(pro_id)"><span>&#xe603;</span></p>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'lovePro',
    components: {},
    props:['proname','price','pro_id','imgsrc','item'],
    data () {
      return {

      }
    },
    methods:{
      ...mapActions(['addToCart']),
      moveCollect(item){
          console.log(item,"item0")
        var that = this;
        this.$axios.get('/api/cancelCollec.do',{params:{proName:item.pro_id}})
          .then(function (resp) {
            that.$emit("removeCollect")
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
  p{
    text-align: center;
  }
  .shopPro{
    border: 1px solid #e4e4e4;
    width: 190px;
    height: 305px;
    position: relative;
    display: inline-block;
    margin:1.5%;
  }
  .shopPro img{
    width: 190px;
    height: 190px;
  }
  .shopPro .pimg{
    position: absolute;
    top: 0;
    left:0;
    width: 180px;
    height: 20px;
    margin: 0;
    padding: 5px;
    z-index: 1;
  }
  .shopPro .pimg span{
    font-family: tea-font;
    float: right;
    width: 20px;
    height: 20px;
    color: #7EAD54;
    cursor: pointer;
    font-size: 20px;
  }
  .shopPro .shopName{
    font-size: 18px;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 5px;
  }
  .shopPro .shopPri{
    margin-top: 5px;
    font-style: oblique;
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
    text-align: center;
  }
  .shopPro:hover .shelter{
    box-shadow: 2px 2px 5px #c9c9c9;
    opacity: 1;
  }
  .shopPro .shelter p{
    width: 50px;
    height: 50px;
    background-color: #666;
    border-radius: 25px;
    cursor: pointer;
    display: inline-block;
    margin: 100px 3px;
    transition: all .1s linear;
  }
  .shopPro .shelter p span{
    font-family: tea-font;
    font-size: 20px;
    line-height: 50px;
    color: white;
  }
  .shopPro .shelter .p1 span{
    width: 20px;
    height: 20px;
    margin-top: 15px;
  }
  .shopPro .shelter .p2 span{
    width: 25px;
    height: 20px;
    margin-top: 15px;
  }
  .shopPro .shelter p:hover{
    background-color: #7EAD54;
  }
  hr{
    margin: 0 auto;
  }
</style>
