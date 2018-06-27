<template>
    <div>
      <navigation></navigation>
      <Title mainTitle="茶树浇灌" subTitle="tea tree" :breadArg="main"></Title>
      <div class="treetop">
        <div class="title">茶树成长历史</div>
        <div class="treebg">
          <img src="../assets/image/u145.png" alt="">
          <p></p>
        </div>
      </div>
      <div class="treebz">
        <div class="inbl left">
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u193.png" alt=""></div>
            <div class="text">
              <p>NO1.</p>
              <p>茶籽期：指茶叶的种子时期，一般在10天到15天内发芽。</p>
            </div>
          </div>
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u195.png" alt=""></div>
            <div class="text">
              <p>NO2.</p>
              <p>幼苗期：是指从茶子萌发到茶苗出土，出现第一次生长休止时为止</p>
            </div>
          </div>
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u211.png" alt=""></div>
            <div class="text">
              <p>NO3.</p>
              <p>幼年期：是指茶树从第一次生长休止到出现第一次开花结实为止的时间。</p>
            </div>
          </div>
        </div>
        <div class="inbl center">
          <img src="../assets/image/ubto.png" alt="">
        </div>
        <div class="inbl right">
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u207.png" alt=""></div>
            <div class="text">
              <p>NO4.</p>
              <p>青年期 ：茶树第一次开花到形成树冠，这个阶段为青年期。</p>
            </div>
          </div>
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u197.png" alt=""></div>
            <div class="text">
              <p>NO5.</p>
              <p>壮年期 ：茶树树冠定型后， 到第一次自然更新，这个阶段称为茶树壮年期。</p>
            </div>
          </div>
          <div class="itro">
            <div class="itimg"><img src="../assets/image/u199.png" alt=""></div>
            <div class="text">
              <p>NO6.</p>
              <p>衰老期：是指茶树由生长旺盛转为到衰老，乃至茶树死亡的时间。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="msg">
        <img src="../assets/image/u215.png" alt="" class="thenew">
        <div class="teacls">
          <p class="history">茶树历史</p>
          <p class="hismes">茶树，山茶科、山茶属灌木或小乔木，嫩枝无毛。叶革质，长圆形或椭圆形。 茶树的叶子可制茶，茶树材质细密，其木可用于雕刻。茶树喜欢温暖湿润气候，喜光耐阴，适于在漫射光下生育；一生分为幼苗期、幼年期、成年期和衰老期。树龄可达一二百年。我国西南部是茶树的起源中心，世界上有60个国家引种了茶树。在热带地区也有乔木型茶树高达15-30米，树龄可达数百年至上千年。</p>
        </div>
        <div class="mytree">
          <img src="../assets/image/u47.png" alt="" class="thetree">
          <img src="../assets/image/u6.png" alt="" class="pengh">
          <img src="../assets/image/u8.png" alt="" class="feil">
          <img src="../assets/image/u10.png" alt="" class="taiy">
        </div>
        <img src="../assets/image/u213.png" alt="" class="bigtree">
      </div>
      <div class="banner">
        <img src="../assets/image/u235.png" alt="">
      </div>
      <footerBlock></footerBlock>
    </div>
</template>

<script>
  import Title from './common/title.vue'
  import navigation from './common/navigation.vue'
  import footerBlock from './common/footer.vue'
    export default {
        name: 'teatree',
        components: {
          Title: Title,
          navigation:navigation,
          footerBlock:footerBlock,

        },
        data () {
            return {
              main: {
                firstTitle: '茶园体验',
                secondTitle: '茶树推荐'
              }
            }
        }
    }
</script>

<style scoped>
  .treetop{
    position: relative;
    height: 80px;
  }
  .treetop .title{
    margin: 0 auto;
    margin-top: 55px;
    font-size: 1.25em;
    text-align: center;
  }
  .treetop .treebg{
    position: absolute;
    left: 20%;
    top: 0;
    width: 50%;
  }
  .treetop .treebg p{
    position: absolute;
    width: 80%;
    top: 50px;
    left: 120px;
    border-bottom: 1px solid #ccc;
  }
  .treebz{
    width: 100%;
    text-align: center;
  }
  .treebz .inbl{
    display: inline-block;
  }
  .treebz .left{
    width: 450px;
    height: 400px;
  }
  .treebz .center{
    width: 333px;
    height: 400px;
  }
  .treebz .right{
    width: 450px;
    height: 400px;
  }
  .treebz .left .itro{
    margin-top: 80px;
    width: 450px;
    height: 80px;
    text-align: left;
  }
  .treebz .left .itro:nth-child(1){
    margin-top: 0;
  }
  .treebz .left .itro .itimg{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #f6f6f6;
    float: left;
    text-align: center;
  }
  .treebz .left .itro .itimg img{
    width: 50px;
    height: 50px;
    margin-top: 15px;
  }
  .treebz .left .text{
    width: 350px;
    height: 80px;
    margin-left: 100px;
  }
  .treebz .left .text p{
    margin-top: 5px;
    float: left;
  }
  .treebz .left .text p:nth-child(1){
    font-size: 20px;
    color: #333;
  }
  .treebz .left .text p:nth-child(2){
    font-size: 16px;
    color: #666;
  }
  .treebz .right .itro{
    margin-top: 80px;
    width: 450px;
    height: 80px;
    text-align: right;
  }
  .treebz .right .itro:nth-child(1){
    margin-top: 0;
  }
  .treebz .right .itro .itimg{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #f6f6f6;
    float: right;
    text-align: center;
  }
  .treebz .right .itro .itimg img{
    width: 50px;
    height: 50px;
    margin-top: 15px;
  }
  .treebz .right .text{
    width: 350px;
    height: 80px;
    margin-right: 100px;
  }
  .treebz .right .text p{
    margin-top: 5px;
    float: right;
  }
  .treebz .right .text p:nth-child(1){
    font-size: 20px;
    color: #333;
  }
  .treebz .right .text p:nth-child(2){
    font-size: 16px;
    color: #666;
  }
  .msg{
    margin-top: 100px;
    width: 100%;
    background-color: #f6f6f6;
    position: relative;
    overflow: hidden;
  }
  .msg .thenew{
    width: 250px;
    position: absolute;
    top: 250px;
    left: -60px;
  }
  .msg .teacls{
    width: 300px;
    height: 350px;
    margin-left: 190px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin-top: 50px;
  }
  .msg .teacls .history{
    font-size: 2em;
    color: #666;
  }
  .msg .teacls .hismes{
    font-size: 16px;
    color: #666;
    line-height: 30px;
    margin-top: 15px;
  }
  .msg .mytree{
    width: 500px;
    height: 450px;
    display: inline-block;
    margin-left: 100px;
    position: relative;
  }
  .msg .mytree .thetree{
    position: absolute;
    top: 100px;
    width: 200px;
  }
  .msg .mytree .pengh{
    width: 100px;
    position: absolute;
    top: 100px;
    left: 300px;
  }
  .msg .mytree .feil{
    width: 100px;
    position: absolute;
    top: 200px;
    left: 320px;
  }
  .msg .mytree .taiy{
    width: 100px;
    position: absolute;
    top: 300px;
    left: 320px;
  }
  .msg .bigtree{
    position: absolute;
    right: 0;
    height: 450px;
  }
  .banner{
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
  .banner img{
    width: 25%;
  }
  @media screen and (max-width: 1280px) {
    .treebz .center{
      display: block;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1150px) {
    .msg .teacls{
      display: block;
      margin: 100px auto;
    }
    .msg .mytree{
      margin-left:20%;
    }
  }
</style>
