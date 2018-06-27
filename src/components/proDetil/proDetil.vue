
<!--推广详情页面-->

<template>
  <div>
    <navigation></navigation>
    <titleBlock mainTitle="茶叶推广" subTitle="Tea Extension" :breadArg="breadArg"></titleBlock>
    <div class="promoteDBlock" style="margin-top: 5%">
      <div class="leftCont">
        <div class="imgBox">
          <img :src="'/apj/'+productData.doc_url" alt="">
          <small class="imgtime">{{productData.doc_time}}</small>
        </div>
        <p>Rhyme tea</p>
        <h3>{{productData.doc_title}}</h3>
        <p>{{productData.doc_content}}</p>
      </div>
      <div class="rightCont">
        <div class="top">
          <p>最近展示</p>
          <figure>
            <img src="../../assets/e.png" alt="">
            <figcaption>
              <h3>2017-10-9</h3>
              <p>花茶又可细分为花草茶和花果茶。饮用叶或花的称之为花草茶，如荷叶、甜菊叶。</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../assets/e.png" alt="">
            <figcaption>
              <h3>2017-10-9</h3>
              <p>花茶又可细分为花草茶和花果茶。饮用叶或花的称之为花草茶，如荷叶、甜菊叶。</p>
            </figcaption>
          </figure>
        </div>
        <div class="middleImg">
          <p>更多推荐</p>
          <router-link v-for="(item) in allArg" :to="{path:'/proDetil',query:{id:item.doc_id}}" @click.native="zz()">
            <img :src="'/apj/'+item.doc_url" alt="" >
          </router-link>
        </div>
        <div class="bottom">
          <p>关键词</p>
          <span>养生健康</span>
          <span>纯天然</span>
          <span>绿色</span> <br>
          <span>活力</span>
          <span>有机</span>
        </div>
      </div>
      <div class="bottomCont">
        <h1>相关产品 <br> <span>Tea Garden</span></h1>
        <div class="bt1"></div>
        <div class="bt2"></div>
      </div>
      <el-row class="productContent">
        <el-col :span="24" >
          <img src="/apj/upload/u212.jpg" alt="" style="width: 190px">
          <img src="/apj/upload/u212.jpg" alt="" style="width: 190px">
          <img src="/apj/upload/u212.jpg" alt="" style="width: 190px">
          <img src="/apj/upload/u212.jpg" alt="" style="width: 190px">
        </el-col>

      </el-row>
    </div>
    <footerBlock></footerBlock>
  </div>
</template>

<script>
  import shopPro from '../common/shopPro.vue'
  import navigation from '../common/navigation.vue'
  import titleBlock from '../common/title.vue'
  import footerBlock from '../common/footer.vue'
  export default {
    name:"proDetil",
    components:{
      shopPro:shopPro,
      navigation:navigation,
      titleBlock:titleBlock,
      footerBlock:footerBlock
    },
    data(){
      return{
        allArg:[{}],
        productData:[{}],
        id: 0,
        breadArg:{
          firstTitle:"文化推广",
          secondTitle:"详情页面",
          subTitleLink:'/teaPromote'
        }
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.$axios.post("/api/getAllDataMuseum.do", {id: this.$route.query.id}) // {params:{以对象的形式传参}}
        .then(resp => {
          console.log("数据返回");
          var arg = resp.data.data;
          this.allArg = [].concat(arg);
          console.log("arg",arg);
          console.log("id:",this.id);
          console.log("******");
          for(var i = 0 ; i < arg.length ; i++){
            if(arg[i].doc_id == this.id){
              this.productData = arg[i];
              console.log("^^^");
              console.log(this.productData);
              return;
            }
          }
        })
    },
    methods : {
        zz: function () {
          this.id = this.$route.query.id;
          this.$axios.post("/api/getAllDataMuseum.do", {id: this.$route.query.id}) // {params:{以对象的形式传参}}
            .then(resp => {
              console.log("数据返回");
              var arg = resp.data.data;
              this.allArg = [].concat(arg);
              console.log("arg",arg);
              console.log("id:",this.id);
              console.log("******");
              for(var i = 0 ; i < arg.length ; i++){
                if(arg[i].doc_id == this.id){
                  this.productData = arg[i];
                  console.log("^^^");
                  console.log(this.productData);
                  return;
                }
              }
            })
        }
    }
  }
</script>

<style scoped>
  .middleImg a{
    display: inline-block;
  }
  .middleImg img{
    width: 100px;
    margin: 5px;
  }
  .middleImg img:hover{
    cursor: pointer;
  }
  .promoteDBlock{
    width: 80%;
    margin: 0 auto;
  }
  .shop{
    margin:0 10px;
  }

  .bottomCont{
    width: 100%;
    position: relative;
    text-align: center;
  }
  .bottomCont h1{
    font-size: 25px;
    font-weight: 200;
    width: 120px;
    margin:10% 43%;
  }
  .bottomCont>div{
    width:80%;
    position: absolute;
    border:1px solid rgba(220, 220, 220, 0.44);
    top:44%;
  }
  .bottomCont .bt1{
    left:5%;
  }
  .bottomCont .bt2{
    right:5%;
  }

  .bottomCont h1 span{
    font-size: 20px;
  }
  .rightCont>div{
    margin-bottom:30px;
  }
  .rightCont>div>p{
    margin-bottom:25px;
    position: relative;
  }
  .rightCont>div>p:after{
    content: " ";
    width:15%;
    border-bottom:1px solid  #7EAD54;
    position: absolute;
    top:20px;
    left: 0;
  }
  .leftCont{
    display: inline-block;
    width:65%;
    margin-right:2.5%;
    vertical-align: top;
  }
  .leftCont p{
    margin: 10px 0;
  }
  .rightCont{
    display: inline-block;
    width: 32%;
    vertical-align: top;
  }
  .rightCont figcaption p{
    font-size: 12px;
  }
  .imgBox>img{
    width: 100%;
  }
  .imgtime{
    margin:3px;
    float: right;
  }
  .imgBox{
    overflow: hidden;
    border: 1px solid gainsboro;
  }
  .imgBox+p{
    color:  #7EAD54;
    margin:15px 0;
    font-weight: bold;
  }
  .rightCont .top h3{
    color: #7EAD54;
  }
  .rightCont .top figure{
    margin-bottom:50px;
  }
  .rightCont .top figure img{
    width:80px ;
    float: left;
  }
  .top{
    overflow: hidden;
  }
  .middle img{
    width:80px;
  }

  .bottom span{
    padding:8px;
    margin: 5px;
    border-radius: 3px;
    display: inline-block;
    background-color: rgba(220, 220, 220, 0.31);
  }

  .productContent{
    text-align: center;
  }

</style>
