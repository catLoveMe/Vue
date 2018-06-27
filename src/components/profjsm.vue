<template>
    <div>
      <div class="title">
        <div class="name">
          精选品质
        </div>
        <hr class="linear"/>
      </div>
      <div class="guild">
        <h3>说明</h3>
        <div class="colum">
          <p><span>类型：</span>茶叶</p>
          <p><span>产地：</span>中国大陆</p>
          <p><span>包装：</span>盒装</p>
          <p><span>净含量：</span>500g</p>
          <p><span>保质期：</span>1095天</p>
          <p><span>存储方式：</span>阴冷干燥处</p>
          <p><span>茶种类：</span>正山小种</p>
        </div>
        <div class="colum">
          <p><span>联系方式：</span>021-6911363</p>
          <p><span>食品添加剂：</span>无</p>
          <p><span>配料表：</span>武夷红茶</p>
          <p><span>省份：</span>福建</p>
          <p><span>系列：</span>tgm021</p>
          <p><span>价格段：</span>100-199</p>
          <p><span></span></p>
        </div>
      </div>
      <div class="copyright">
        <h3>权利声明</h3>
        <p>西江月的所有商品信息、客户评价、商品咨询、网友讨论等内容，是西江月重要的经营资源，未经许可，禁止非法转载使用</p>
        <p>注：本站商品信息均来自于西江月官方，其真实性、准确性和合法性由西江月负责。本站外的连接不提供任何保证，并不承担任何法律责任</p>
      </div>
      <div class="banner">
        <img src="../assets/image/u235.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'fjsm',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style scoped>
  .title{
    width: 60%;
    margin: 0 auto;
    height: 100px;
    position: relative;
  }
  .title .linear{
    position: absolute;
    top: 50px;
    color: #ccc;
    width: 100%;
    z-index: -1;
  }
  .title .name{
    padding: 10px 20px;
    width: 40%;
    margin: 0 auto;
    line-height: 80px;
    font-size: 1.5em;
    background-color: white;
  }
  .guild{
    width: 60%;
    border-bottom: 1px solid #999;
    height: 240px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .guild h3{
    text-align: left;
    margin-bottom: 20px;
  }
  .guild .colum{
    width: 45%;
    display: inline-block;
    height: 200px;
  }
  .guild .colum p{
    font-size: 12px;
    text-align: left;
    margin-top: 10px;
    color: #666;
  }
  .guild .colum p span{
    display: inline-block;
    width: 50%;
  }
  .copyright{
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }
  .copyright h3{
    text-align: left;
    margin-bottom: 20px;
  }
  .copyright p{
    text-align: left;
    font-size: 12px;
    width: 90%;
    color: #666;
    margin: 0 auto;
    margin-top: 10px;
  }
  .banner{
    width: 100%;
    overflow: hidden;
  }
  .banner img{
    width: 30%;
  }
</style>
