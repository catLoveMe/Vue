<template>
  <div >
    <navigation></navigation>
    <titleBlock mainTitle="茶树领养" subTitle="Teatree Adopt" :breadArg="breadArg"></titleBlock>
    <div class="adoptBlock">
      <div class="teaTitleLine">
        <img src="../assets/image/leafImg.png" alt="">
        <span class="line"></span>
        <h2>领养规则</h2>
        <span class="line"></span>
      </div>
      <div class="treeAdoptRule">
        <img src="../assets/image/treeAdopt.jpg" alt="">
      </div>
      <div class="teaTitleLine2">
        <span></span>
        <h2>品种选择</h2>
        <span></span>
        <img src="../assets/image/leafImg.png" alt="">
      </div>
      <div class="treeAdoptpart">
        <div v-for="(item,index) in teaArg" v-bind:key="item.tea_id" class="itemBlock">
          <div class="mainContent">
            <img :src="'/apj'+item.tea_img" alt="">
            <div class="teatreeIntroduce">
              <h2 class="treeTitle">{{item.tea_category}}</h2>
              <p class="treeContent">{{item.tea_text}}</p>
              <btnBlock btnClass="middBtn" btnText="领养" @clickBtn="adoptTree(item.tea_id)"></btnBlock>
            </div>
          </div>
        </div>
      </div>

    </div>

    <footerBlock></footerBlock>
  </div>
</template>

<script>
  import navigation from './common/navigation.vue'
  import title from './common/title.vue'
  import footerBlock from './common/footer.vue'
  import btnBlock from './common/teaBtn.vue'
  export default{
    name:'teaAdopt',
    data(){
      return{
        breadArg:{
          firstTitle:'茶树领养'
        },
        teaArg:[]
      }
    },
    components:{
      navigation:navigation,
      titleBlock:title,
      footerBlock:footerBlock,
      btnBlock:btnBlock
    },
    created(){
      console.log("获取数据lalala");
      this.$axios.get("/api/getPlant.do").then(resp=>{
        console.log(resp);
        this.teaArg = [].concat(resp.data.data);
        console.log("***");
        console.log(this.teaArg);
      });
    },
    methods: {
      adoptTree(id){
        this.$axios.get("/api/savePlant.do", {params: {tea_id: id}})
          .then(resp=> {
            console.log(resp);
            console.log("数据返回成功");
            this.open2();
            this.$router.push("/teatree")
          });
      },
      open2() {
        this.$alert('领养成功', '提示', {
          confirmButtonText: '确定',
        });
      }
    }
  }
</script>

<style scoped>
  .itemBlock:nth-child(odd) img{
    float: right;
  }

  .itemBlock:nth-child(odd) .teatreeIntroduce{
    float: left;
  }

  .itemBlock:nth-child(even) img{
    float: left;
  }

  .itemBlock:nth-child(even) .teatreeIntroduce{
    float: right;
  }

  .itemBlock:after{
    content:"";
    display: block;
    clear: both;

  }

  *{
    margin:0;
    padding:0;
  }
  .treeContent{
    margin: 10px 0;
    font-size: 16px;
    line-height: 32px;
  }
  .mainContent>div{
    display: inline-block;
    /*margin-left: 20%;*/
    text-align: left;
  }
  .teatreeIntroduce{
    width: 45%;
  }
  .itemBlock{
    margin: 50px 0;
  }
  .adoptBlock{
    width: 80%;
    margin: 0 auto;
  }

  .treeAdoptend img{
    margin-left: 400px;
  }

  .teaTitleLine{
    width: 100%;
    margin-top: 30px;
  }
  .teaTitleLine img{
    vertical-align: bottom;
    width:13%;
  }
  .teaTitleLine span{
    display: inline-block;
    border-bottom: 1px solid #f2f2f2;
  }
  .teaTitleLine span:nth-child(2){
    width: 30%;
  }
  .teaTitleLine span:nth-child(4){
    width: 30%;
  }
  .teaTitleLine h2{
    display: inline-block;
    margin: 10px 30px 0;
    font-size:150%;
  }
  .treeAdoptRule img{
    margin-left:10%;
    margin-top: 20px;
    width:80%;
  }
  .teaTitleLine2{
    margin-left:15%;
    margin-top: 10px;

  }
  .teaTitleLine2 img{
    display: inline-block;
    width:13%;
    -webkit-transform: rotate(180deg);
    position: relative;
    top: 50px;
    left: 0;

  }
  .teaTitleLine2 span:nth-child(1){
    display: inline-block;
    width: 34%;
    border-bottom: 1px solid #f2f2f2;
  }
  .teaTitleLine2 h2{
    display: inline-block;
    margin: 10px 30px 0;
    font-size:150%;
  }
  .teaTitleLine2 span:nth-child(3){
    display: inline-block;
    width: 34%;
    border-bottom: 1px solid #f2f2f2;
  }

  .treeAdoptpart{
    margin-top: 80px;
    padding: 0 10%;
  }
  .treeAdoptpart h3{
    margin-top: 30px;
    color:grey;
  }
  .treeAdoptpart p{
    color: grey;
    text-indent:35px;
  }
  .treeAdoptpart img{
    width:40%;
    max-height: 300px;
    /*border:1px solid red;*/
    vertical-align: top;
  }

  @media screen and (max-width: 830px){

    .teaTitleLine2 h2,.teaTitleLine h2{

      font-size: 100%;

    }

  }
  @media screen and (max-width: 680px){

    .teaTitleLine2 h2,.teaTitleLine h2{

      font-size: 50%;

    }

  }
</style>
