<template>
  <div class='indexBlock'>
    <header>
      <nav>
        <div class="subNav">
          <div class="navBtn">
            <span @click="showModal2(0)" v-if="!loginStatus">注册</span>
            <small v-if="!loginStatus">●</small>
            <span  @click="showModal2(1)" v-if="!loginStatus">登录</span>
            <span v-if="loginStatus" @click="exit">退出登录</span>
          </div>
        </div>
        <div class="navTitle">
          <div class="contactBlock">
            <p>
              联系我们<br>0122 333 888
            </p>
            <span class="iconfont icon-tel"></span>
          </div>
          <div class="logoBlock">
            <img src="../assets/image/logo.png" alt="">
          </div>
          <div class="cartBlock">
            <p>
              <span class="iconfont icon-cart"></span>
              <span>购物车<i>￥<span>{{ totalPrice }}</span></i></span>
            </p>
          </div>
        </div>
        <div class="mainNav">
          <div class="navContent">
            <ul>
              <li><router-link to="/shop">商品</router-link></li>
              <li class="firstNav">工艺体验
                <ul class="secondNav">
                  <li><router-link to="/teayouyuan">品鉴活动</router-link></li>
                  <!--<li><router-link to="/teaAdopt">领养茶树</router-link></li>-->
                </ul>
              </li>
              <li><router-link to="/healthydrinktea">选钻推荐</router-link></li>
              <li><router-link to="/newtea">原石预约</router-link></li>
              <li><router-link to="/pack">个性定制</router-link></li>
              <li><router-link to="/teaPromote">钻石文化</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="bannerBlock">
      <el-carousel :interval="3000" arrow="always" height="530px" >
        <el-carousel-item>
          <figure class="">
            <img src="../assets/image/index/banner/banner1.jpg" alt=""/>
          </figure>
        </el-carousel-item>
        <el-carousel-item>
          <figure class="">
            <img src="../assets/image/index/banner/banner2.jpg" alt=""/>
          </figure>
        </el-carousel-item>
        <el-carousel-item>
          <figure class="">
            <img src="../assets/image/index/banner/banner3.jpg" alt=""/>
          </figure>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="transitionBlock">
      <img src="../assets/image/index/transition2.png" alt="">
      <p>我们是钻石销售市场拥有原石来源基地</p>
      <p>访问我们的网站了解独家产品</p>
      <router-link to="/shop">
        <p class="shopLink">进入商城<span class="iconfont icon-arrow-right"></span></p>
      </router-link>
    </div>
    <div class="newTea">
      <img src="../assets/image/index/transition2.png" alt="">
      <div class="recommedPrice">
        <p>only</p>
        <i>￥{{recommed.price}}</i>
      </div>
      <div class="newTeaText">
        <h1>今日推荐</h1>
        <small>Green Tea & On Sale</small>
        <p><span class="newTeaName">{{recommed.name}} </span>{{recommed.text}}
        </p>
        <p class="timeText"><span>01</span>天<span>14</span>小时<span>36</span>分<span>27</span>秒</p>
        <div class="btnBlock"><teaBtn btnClass="middBtn" btnText="立即查看" @click.native="linkTo('/shop')"></teaBtn></div>
        <div class="heart"><span class="iconfont icon-heart"></span></div>
      </div>
    </div>
    <div class="newTeaTitle">
      <img src="../assets/image/index/leaf.png" alt="">
      <titleBlock title="新品上市" subTitle="OUR PRODUCT" smallTitle="spring green tea"></titleBlock>
    </div>
    <div class="mainContent">
      <!--<div class="productBtnGroup">-->
      <!--<span active-class="activeLink">茶叶</span>-->
      <!--<span active-class="activeLink">茶食</span>-->
      <!--<span active-class="activeLink">茶具</span>-->
      <!--</div>-->
      <div class="productBlock">
        <pros v-for="iteam in shopPro"
              :key="iteam.pro_name"
              :proname="iteam.pro_name"
              :price="iteam.pro_price"
              :pro_id = "iteam"
              :imgsrc="'/apj'+ iteam.pro_img1"
              @click.native="getproname(iteam.pro_name)"></pros>
      </div>
      <div class="otherLink">
          <div>
            <div @click="linkTo('/pack')">
              <h1>个性定制</h1>
              <hr>
              <small style="float: right">packing</small>
            </div>
          </div>
          <div>
            <div @click="linkTo('/newtea')">
              <h1>原石预约</h1>
              <hr>
              <small style="float: right">new tea</small>
            </div>
          </div>
      </div>
    </div>
    <!--<div class="teatreeTitle">-->
      <!--<img src="../assets/image/index/teatreebg.png" alt="">-->
      <!--<titleBlock title="茶树领养" subTitle="HAVING A TEA TREE" smallTitle="for yourself"></titleBlock>-->
    <!--</div>-->
    <!--<div class="mainContent">-->
      <!--<img src="../assets/image/index/teaTree.jpg" alt="">-->
      <!--<img src="../assets/image/index/tree.png" alt="" class="treeBtn" @click="linkTo('/teaAdopt')">-->
    <!--</div>-->
    <div class="culturalTitle">
      <img src="../assets/image/index/culturalTitle.png" alt="">
      <titleBlock title="钻石文化" subTitle="CULTURAL PROMOTION" smallTitle="learn more"></titleBlock>
    </div>
    <div class="mainContent culturalBlock">
      <div class="leftBlock">
        <div class="bgBlock"></div>
        <div class="leftContent">
          <img :src="'/apj'+cultrualArg[0].doc_url" alt="">
          <small class="docTime">{{cultrualArg[0].doc_time}}</small>
          <h3>{{cultrualArg[0].doc_title}}</h3>
          <small>
            {{cultrualArg[0].doc_content.substring(0,20)}}
          </small>
          <p class="learnMore" @click="linkTo('/proDetil?id='+cultrualArg[0].doc_id)">/ 了解更多</p>
        </div>
      </div>
      <div class="rightBlock">
        <div class="rightContent">
          <img :src="'/apj'+cultrualArg[1].doc_url" alt="">
          <div>
            <small class="docTime">{{cultrualArg[1].doc_time}}</small>
            <h3>{{cultrualArg[1].doc_title}}</h3>
            <small>
              {{cultrualArg[1].doc_content.substring(0,20)}}
            </small>
            <p class="learnMore" @click="linkTo('/proDetil?id='+cultrualArg[1].doc_id)">/ 了解更多</p>
          </div>

        </div>
        <div class="rightContent">
          <img :src="'/apj'+cultrualArg[2].doc_url" alt="">
          <div>
            <small class="docTime">{{cultrualArg[2].doc_time}}</small>
            <h3>{{cultrualArg[2].doc_title}}</h3>
            <small>
              {{cultrualArg[2].doc_content.substring(0,20)}}
            </small>
            <p class="learnMore" @click="linkTo('/proDetil?id='+cultrualArg[2].doc_id)">/ 了解更多</p>
          </div>

        </div>
      </div>
    </div>
    <footerBlock></footerBlock>
    <div class="navBlock" >
      <navigation ref="navigationBlock"></navigation>
    </div>
  </div>
</template>

<script>
  import footerBlock from '../components/common/footer.vue'
  import teaBtn from '../components/common/teaBtn.vue'
  import titleBlock from '../components/common/indexTitleLine.vue'
  import login from '../components/login.vue'
  import register from '../components/register.vue'
  import forgetPsw from '../components/forgetPsw.vue'
  import navigation from '../components/common/navigation.vue'
  import pros from './common/shopPro'
  import {mapGetters,mapActions} from 'vuex'

  export default{
    name:'index',
    data(){
      return {
        loginStatus:0,
        loginShow2:false,
        registerShow2:false,
        forgetPswShow2:false,
        navShow:false,
        recommed:{
          name:"绿茶",
          text:"未经发酵又称不发酵茶，经杀青、揉拧、干燥等典型工艺，制成品、" +
          "茶汤、叶底均已绿色为主调。保留了鲜叶的天然物质       " +
          "   。绿茶中的这些天然营养成份对防衰老、" +
          "防癌、抗癌、杀菌、消炎等具有特殊效果。",
          price:"20"
        },
        shopPro: [{pro_id:1}],
        cultrualArg:[{doc_time:"...",doc_title:"...",doc_content:"...",doc_id:""},{doc_time:"...",doc_title:"...",doc_content:"...",doc_id:""},{doc_time:"",doc_title:"...",doc_content:"...",doc_id:""}]
      }
    },
    components:{
      footerBlock:footerBlock,
      navigation:navigation,
      titleBlock:titleBlock,
      teaBtn:teaBtn,
      login:login,
      register:register,
      forgetPsw:forgetPsw,

      pros:pros,
    },
    created(){
      this.loginStatus = parseInt(window.sessionStorage.loginStatus) ;
      this.$axios.post('/api/shopMain.do', {
        page:1
      }).then((resp) => {
        this.shopPro = resp.data.data;
        this.$store.state.cart.shop_list = resp.data.data;
      });
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll);
      this.$axios.post("/api/getAllDataMuseum.do").then(resp=>{
        console.log(resp);
        this.cultrualArg =[].concat(resp.data.data);
        console.log("~~~~~~")
        console.log(this.cultrualArg);
        console.log(this.cultrualArg);
        console.log("数据返回")
      });
    },
    destroyed(){
      window.removeEventListener('scroll',this.handleScroll);
      console.log("取消滚动事件");
    },
    methods:{
      linkTo(link){
        this.$router.push(link);
      },
      exit(){
        console.log("退出登录");
        this.loginStatus = 0 ;
        window.sessionStorage.loginStatus = 0;
        window.location.reload();
        console.log(window.sessionStorage.loginStatus);
      },
      showModal2(option){
        if(option === 0){
          this.$refs.navigationBlock.showReg();
        }
        this.$refs.navigationBlock.showModal();
      },
      handleScroll(){
        var scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 100){
          this.$refs.navigationBlock.showNavigation();
        }else if(scrollTop < 100){
          this.$refs.navigationBlock.hideNavigation();
        }
      }
    },
    computed :{
      ...mapGetters(['totalNum', 'totalPrice'])
    }
  }
</script>

<style scoped>
  .docTime{
    color: #8EB45E;
  }
  .index{
    color: #8EB45E;
  }
  a{
    text-decoration: none;
  }
  a:link{
    color: #2a2929;
  }
  a:visited{
    color: #2a2929;
  }
  a:hover{
    color: #8EB45E;
  }
  a:active{
    color: #8EB45E;
  }

  .teatreeTitle,.culturalTitle{
    position: relative;
  }
  .culturalTitle img{
    position: absolute;
    left: 25%;
    bottom: 40px;
    width: 200px;
  }
  .teatreeTitle img{
    position: absolute;
    opacity: 0.5;
    right: 0;
    left: 0;
    bottom: 40px;
    margin: auto;
    width: 130px;
    transform: rotate(30deg);
  }
  .indexBlock{
    overflow: hidden;
  }
  .newTeaTitle{
    position: relative;
    padding-bottom: 70px;
    top:60px;
  }
  .newTeaTitle img{
    position: absolute;
    width: 250px;
    right: 0;
    left: 0;
    margin: auto;
    opacity: 0.7;
  }
  a{
    text-decoration: none;
  }

  .borderBlock{
    border: 1px solid #f2f2f2;
  }
  .productBlock{
    text-align: center;
  }
  .productBtnGroup span:hover{
    cursor: pointer;
  }
  .activeLink{
    background-color: #8EB45E;
    border:0;
  }
  .recommedPrice{
    position: absolute;
    display: inline-block;
    height: 80px;
    width: 80px;
    /*line-height: 100px;*/
    color: white;
    text-align: center;
    border-radius: 50%;
    background-color: #8EB45E;
    top: 50px;
    left: 40%;
  }
  .recommedPrice p{
    margin: 10px 0 5px;
    text-align: center;
  }
  .recommedPrice i{
    font-size: 20px;
  }
  .newTeaName{
    font-size: 20px;
    color: #8EB45E;
    margin-right: 10px;
  }
  /*topNav*/
  .navBlock{
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    /*text-align: center;*/
  }
  /*model*/
  #modal2{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 10000;
    display: none;
  }

  #modal2 .icon-close{
    float: right;
    color: white;
    margin: 50px;
  }

  .modalBlock2{
    width: 70%;
    height: 600px;
    background-color: white;
    margin: 5% auto 0;
  }
  /*culturalBlock*/

  /*rightBlock*/
  .learnMore{
    color:#8EB45E;
  }
  .learnMore:hover{
    cursor: pointer;
  }
  .rightContent{
    border: 1px solid lightgray;
    margin: 0 0 20px 0;
    padding: 10px;
  }
  .rightBlock div{
    /*display: inline-block;*/
  }
  .rightContent img{
    width: 45%;
    vertical-align: top;
    margin-right: 20px;
  }
  .rightContent div{
    display: inline-block;
    width: 45%;
  }

  /*leftBlock*/
  .culturalBlock p,.culturalBlock small,.culturalBlock h3{
    margin: 10px 0;
    display: block;
  }
  .culturalBlock h3{
    font-weight: 400;
  }
  .leftContent img{
    width: 100%;
  }
  .leftContent{
    overflow: hidden;
    position: absolute;
    z-index: 110;
    width: 70%;
    top: 10%;
  }
  .bgBlock{
    position: absolute;
    right: 15%;
    width: 70%;
    border: 6px solid lightgray;
    height: 60%;
    z-index: 10;
  }
  .culturalBlock>div{
    position: relative;
    display: inline-block;
    width: 45%;
    margin: 0 20px;
    height: 330px;
    vertical-align: middle;
  }
  /*treeBtn*/
  .treeBtn{
    position: absolute;
    width: 20%;
    top: 100px;
    right:0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .treeBtn:hover{
    cursor: pointer;
  }
  /*otherLink*/
  .otherLink{
    text-align: center;
  }
  .otherLink>div{
    display: inline-block;
    width: 38%;
    margin: 20px 10px;
    padding: 30px 0 90px 0;
    text-align: right;
    color: white;
  }
  .otherLink>div:hover{
    cursor: pointer;
  }
  .otherLink>div:first-child{
    background: white url("../assets/image/index/pack.jpg") no-repeat;
    background-size: contain;
  }
  .otherLink>div:nth-child(2){
    background: white url("../assets/image/index/newtea.jpg") no-repeat;
    background-size: contain;
  }
  .otherLink>div>div>hr{
    border:1px solid white;
    margin: 10px 0;
  }
  .otherLink>div>div{
    display: inline-block;
    width: 40%;
    margin-right: 20px;
    text-align: right;
  }
  .productBtnGroup{
    width: 100%;
    text-align: center;
  }
  .productBtnGroup span{
    display: inline-block;
    padding: 2px 20px;
    font-size: 12px;
    border-radius: 15px;
    border: 1px solid #E4E4E4;
    margin: 5px 10px;
  }
  /*mainContent*/
  .mainContent{
    position: relative;
    width: 80%;
    margin: 60px auto ;
  }
  /*newtea*/
  .newTea img{
    margin: 10% 0 0 16%;
    vertical-align: top;
  }
  .newTea{
    position: relative;
    width: 100%;
    height: 445px;
    background: url("../assets/image/index/bg1.png");
  }
  .newTeaText{
    display: inline-block;
    width: 30%;
    margin-left: 10%;
    overflow: hidden;
    text-align: left;
  }
  .newTeaText h1{
    letter-spacing: 40px;
    margin: 30px 0;
  }
  .newTeaText small{
    color: #8EB45E;
    display: inline-block;
    text-align: right;
    margin-bottom: 20px;
  }
  .newTeaText p{
    line-height: 32px;
  }
  .timeText{
    color: #8EB45E;
    margin: 20px;
  }
  .timeText span{
    font-size: 36px;
    font-weight: 600;
    display: inline-block;
    margin: 10px;
  }

  .heart{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #8EB45E;
    text-align: center;
    line-height: 35px;
    /*margin-left: 30px;*/
  }
  .heart span{
    font-size: 24px;
    color: #8EB45E;
    margin-top: 10px;
  }
  /*transition*/
  .transitionBlock{
    height: 355px;
    background-color: white;
    text-align: center;
  }
  .transitionBlock img{
    width: 200px;
    margin: 30px 0;
  }
  .transitionBlock p{
    font-size: 12px;
    color: grey;
  }
  .shopLink{
    color: #8EB45E !important;
    margin: 20px;
    font-size: 20px;
  }
  .shopLink span{
    font-size: 12px;
    margin: 0 0 0 20px;
  }
  .btnBlock{
    display: inline-block;
    width: auto;
    text-align: left;
    margin-right: 20px;
  }
  /*font face*/
  @font-face{
    font-family:"iconfont";
    src: url('../assets/icon/iconfont.ttf');
  }

  .icon-cart:before { content: "\e603"; }
  .icon-tel:before { content: "\e644"; }
  .icon-arrow-right:before { content: "\e632"; }
  .icon-heart:before { content: "\e751"; }
  .icon-close:before { content: "\e612"; }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .subNav{
    background-color: #2a2929;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: white;
    overflow: hidden;
  }
  .navBtn{
    float: right;
    margin-right: 2%;
  }
  .navBtn span{
    margin: 0 5px;
    font-size: 12px;
    transition: all 0.3s ease;
  }

  .navBtn span:hover{
    cursor: pointer;
    color: #8EB45E;
  }

  .navTitle{
    width: 100%;
    height:100px;
    background-color: white;
    color: #444444;

  }

  /*banner*/
  .bannerBlock{
    width: 100%;
    margin: 0 auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel{
    width: 100%;
  }
  .el-carousel__container{
    height: 430px;
  }

  .bannerBlock figure{
    width: 100%;
    margin: 0 auto;
  }
  .bannerBlock figure img{
    width: 100%;
  }

  .el-carousel__arrow{
    background-color: #8EB45E !important;
    width: 50px;
    height: 50px;
    font-size: 16px;
  }

  /*导航*/
  nav{
    position: relative;
    z-index: 100;
    color: #444444;
  }
  .navContent{
    width: 100%;
    height: 43px;
    text-align: center;
  }
  .navContent ul{
    list-style: none;
    background-color: white;
  }
  .navContent>ul{
    height: 43px;
    margin: 0 auto;
    display: inline-block;
  }
  .navContent>ul>li{
    display: inline-block;
    padding: 0 30px;
    line-height:43px;
    font-size: 14px;
  }
  .navContent>ul>li li{
    padding: 0 30px;
  }
  .navContent>ul>li:hover{
    cursor: pointer;
    color: #8EB45E;
  }
  .firstNav{
    position: relative;
  }
  .firstNav:hover .secondNav{
    display: block;
  }

  .secondNav{
    position: absolute;
    left: 0;
    display: none;
  }

  .secondNav li{
    height: 50px;
    color: black;
    transition: all 0.3s ease;
  }

  .secondNav li:hover{
    color: #7EAD54;
  }

  .navTitle{
    text-align: center;
    border-bottom: 1px solid lightgray;
  }
  .navTitle>div{
    display: inline-block;
    vertical-align: middle;
    margin-top: 20px;
  }
  .logoBlock{
    margin: 0 100px;
  }
  .logoBlock>img{
    height: 70px;
  }
  .contactBlock{
    width: 180px;
  }
  .contactBlock>p{
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    color: #444444;
    font-size: 12px;
  }
  .contactBlock>span{
    vertical-align: middle;
    font-size: 32px;
    margin: 0 10px;
  }
  .cartBlock{
    width: 180px;
    color: #444444;
    text-align: center;
  }
  .cartBlock>p>span{
    display: inline-block;
    vertical-align: middle;
  }
  .cartBlock>p>span:last-child{
    width: 50px;
  }
  .cartBlock p{
    font-size: 12px;
  }
  .icon-cart{
    margin: 10px;
    font-size: 20px;

  }
</style>
