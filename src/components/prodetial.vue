<template>
  <div>
    <navigation></navigation>
    <titleBlock mainTitle="商城" subTitle="shop" :breadArg="main"></titleBlock>
    <div class="center" style="width: 80%;margin: 0 auto">
      <div class="inline-block">
        <div class="imgshow">
          <div class="imgbox">
            <img :src="'apj'+detaildata[0].pro_img1" alt="" class="none" style="display: none">
            <img :src="'apj'+detaildata[0].pro_img1" alt="" class="over">
            <div class="box"></div>
          </div>
          <canvas class="tobig" width="350" height="350"></canvas>
          <div class="like" @click="addCollect(detaildata[0])">&#xe751;</div>
        </div>
        <div class="togleshow">
          <span>&#xe660;</span>
          <img :src="'apj'+detaildata[0].pro_img1" alt="" @click="nowimg(1)" class="img1">
          <img :src="'apj'+detaildata[0].pro_img2" alt="" @click="nowimg(2)" class="img2">
          <img :src="'apj'+detaildata[0].pro_img3" alt="" @click="nowimg(3)" class="img3">
          <span>&#xe632;</span>
        </div>
      </div>
      <div class="inline-block">
        <div class="protle">
          <div class="probt">
            <h3>{{ detaildata[0].pro_name }}</h3>`
            <p>价格 ：&nbsp;&nbsp;{{ detaildata[0].pro_price }}.00</p>
          </div>
          <div class="protj">
            <img src="../assets/image/ttjj.png" alt="">
          </div>
          <div class="projs">{{ detaildata[0].pro_info }}</div>
          <div class="byshop">
            <el-input-number size="mini" v-model="num1" :min="1" class="gouwu"></el-input-number>
            <span>{{ detaildata[0].pro_size }}</span>
            <span v-if="detaildata[0].pro_size">有限</span>
            <div class="prostatus">
              <div class="status"></div>
              现货
            </div>
          </div>
          <div class="proinfo">
            <p><span>类别：</span>{{ detaildata[0].pro_type_name }}</p>
            <p><span>生产日期：</span>{{ protime }}</p>
            <p><span>关键词：</span>{{ detaildata[0].pro_type_name }}</p>
          </div>
          <div class="btns">
            <!--<router-link :to="{path:'/payNow',query:{pro_id:item.id}}"><button>qqq</button></router-link>-->
            <router-link :to="{path:'/payNow',query:{pro_id:detaildata[0].pro_id,num:num1}}"><sdbtn btnClass="middBtn" btnText="立即购买"></sdbtn></router-link>
            <sdbtn btnClass="middBtn" btnText="加入购物车" @click.native="zz();addToCart(detaildata[0])"></sdbtn>
          </div>
        </div>
      </div>
      <div class="promes">
        <ul>
          <router-link to="/procpxq" message="<h1>123456789</h1>" active-class="active" tag="li">产品详情</router-link>
          <router-link to="/profjsm" active-class="active" tag="li">附加说明</router-link>
          <router-link to="/propl" active-class="active" tag="li">评论</router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>

<script>
  import sdbtn from './common/teaBtn.vue'
  import titleBlock from './common/title.vue'
  import navigation from  './common/navigation.vue'
  import footerBlock from './common/footer.vue'
  import {mapGetters,mapActions} from 'vuex';

  export default {
    name: 'prodetial',
    components: {
      sdbtn: sdbtn,
      titleBlock: titleBlock,
      footerBlock:footerBlock,
      navigation:navigation
    },
    data () {
      return {
        imgdetail: './src/assets/image/u212.jpg',
        deta1: './src/assets/image/udeta1.jpg',
        deta2: './src/assets/image/udeta2.jpg',
        deta3: './src/assets/image/udeta3.jpg',
        num1: 1,
        detaildata: [{
          pro_info: ''
        }],
        protime: '',
        main: {
          firstTitle: '商城',
          secondTitle: '产品详情',
          subTitleLink:'/shop'
        }
      }
    },
    created () {
      let name = this.$store.state.prodetailname.proname;
      this.$axios.post('/api/getMes.do', {
        proname: name
      }).then((resp) => {
        this.detaildata = resp.data.data;
        let newDate = new Date(resp.data.data[0].pro_storetime);
        this.protime = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+newDate.getDate();
        });
      $(function () {
        $(".imgbox").mouseenter(function (e) {
          let clickE = e;
          let imgwidth = parseInt($(".none").css("width"));
          let multwidth = imgwidth/325;
          let imgheight = parseInt($(".none").css("height"));
          let multheight = imgheight/325;
          $(".box").css({
            left: clickE.offsetX - 60 + "px",
            top: clickE.offsetY -60 + "px"
          });
          let positionleft = $(".box").position().left;
          let positiontop = $(".box").position().top;
          $(".imgbox").mousemove(function(e){
            let currentE = e;
            $(".box").css({
              left: currentE.clientX - clickE.clientX + positionleft + "px",
              top: currentE.clientY - clickE.clientY + positiontop + "px"
            });
            let newpositionleft = $(".box").position().left;
            let newpositiontop = $(".box").position().top;
            let ctx = $(".tobig")[0].getContext("2d");
            ctx.drawImage($(".none")[0],newpositionleft*multwidth,newpositiontop*multheight,120*multwidth,120*multheight,0,0,350,350);
          })
        });
      })
    },
    methods : {
        nowimg: function (n) {
          let nowsrc = $(".img"+n).attr("src");
          $(".none").attr("src",nowsrc);
          $(".over").attr("src",nowsrc);
        },
        zz: function () {
          this.$store.state.cart.count=this.num1;
          console.log(this.$store.state.cart.count);
        },
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
    src: url('../assets/icon/tea.ttf');
  }
  .center {
    text-align: center;
  }
  .inline-block {
    display: inline-block;
    width: 450px;
    height: 520px;
  }
  .imgshow {
    width: 430px;
    height: 327px;
    float: right;
    position: relative;
  }
  .imgshow .over {
    width: 325px;
    height: 325px;
    float: left;
  }
  .like {
    width: 30px;
    height: 30px;
    border: 1px solid #888;
    border-radius: 15px;
    float: right;
    font-family: tea-font;
    color: #7EAD54;
    text-align: center;
    line-height: 30px;
    margin-top: 290px;
    margin-right: 50px;
    font-size: 15px;
  }
  .togleshow {
    width: 400px;
    height: 100px;
    margin-top: 35px;
    float: left;
  }
  .togleshow img {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  .togleshow span {
    vertical-align: 40%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    font-weight: bolder;
    color: #333;
    font-family: tea-font;
  }
  .protle {
    margin-top: 30px;
    width: 450px;
    height: 80px;
  }
  .protle .probt {
    float: left;
    width: 50%;
    height: 80px;
    text-align: left;
  }
  .protle .probt p {
    font-size: 14px;
    margin-top: 25px;
  }
  .protle .protj {
    float: left;
    width: 50%;
    height: 80px;
    text-align: left;
  }
  .protle .protj img {
    float: right;
  }
  .protle .projs {
    text-align: left;
    float: left;
    margin-top: 10px;
    font-size: 14px;
  }
  .protle .byshop {
    margin-top: 30px;
    float: left;
    height: 85px;
    width: 100%;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    text-align: left;
  }
  .protle .byshop .gouwu {
    margin-top: 30px;
  }
  .protle .byshop span {
    display: inline-block;
    width: 70px;
    height: 30px;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    font-size: 14px;
  }
  .protle .byshop .prostatus {
    width: 150px;
    height: 20px;
    float: right;
    margin-top: 40px;
  }
  .protle .byshop .prostatus .status {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #333;
    background-color: #7EAD54;
    display: inline-block;
    margin: 0 5px;
  }
  .protle .proinfo {
    height: 100px;
    width: 100%;
    float: left;
    margin-top: 20px;
    text-align: left;
    font-size: 14px;
  }
  .protle .proinfo p {
    margin-top: 10px;
  }
  .protle .proinfo span {
    display: inline-block;
    width: 120px;
  }
  .protle .btns {
    height: 100px;
    width: 100%;
    float: right;
    text-align: left;
  }
  .protle .btns div{
    float: right;
    margin: 10px;
  }
  .promes{
    width: 360px;
    margin: auto;
    height: 40px;
  }
  .promes li{
    float: left;
    padding: 5px 10px;
    margin: 0 15px;
    font-size: 1.25em;
    font-weight: bolder;
    border-bottom: 3px solid  rgba(255,255,255,0);
    cursor: pointer;
    list-style: none;
    transition: all .1s linear;
  }
  .promes li:hover{
    border-bottom: 3px solid  #7EAD54;
  }
  .promes .active{
    border-bottom: 3px solid  #7EAD54;
  }

  .box{
    width: 120px;
    height: 120px;
    position: absolute;
    left:0;
    top: 0;
    cursor: pointer;
    display: none;
    background-color: olive;
    opacity: 0.5;
  }
  .tobig{
    border: 1px dashed olive;
    position: absolute;
    left: 325px;
    z-index: 12;
    display: none;
  }
  .imgshow .imgbox{
    width: 325px;
    height: 325px;
    float: left;
    overflow: hidden;
    position: relative;
  }
  .imgshow .imgbox:hover .box{
    display: block;
  }
  .imgshow .imgbox:hover+.tobig{
    display: block;
  }
</style>
