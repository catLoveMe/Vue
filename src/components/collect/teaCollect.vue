<!--我的收藏页面-->

<template>
  <div id="collection">
    <el-row>
      <el-col :span="24">
        <lovePro @removeCollect ="reload()" v-for="item in collect"
                 :item='item' :key="item.pro_id"
                 :pro_id="item"
                 :proname="item.pro_name"
                 :price="item.pro_price"
                 :imgsrc="'apj'+item.pro_img1"
                 @click.native="getproname(item.pro_name)"></lovePro>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import lovePro from '../common/lovePro.vue'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name:"teaCollect",
    components:{
      lovePro:lovePro
    },
    data(){
      return{
        collect:[]
      }
    },
    created () {
      this.$axios.get('/api/collectionCheck.do')
        .then(resp => {
          this.collect = resp.data.data;
        })
    },
    methods:{
      reload(){
        console.log("1111111111");
        this.$axios.get('/api/collectionCheck.do')
          .then(resp => {
            console.log(resp,"121212121");
            this.collect = resp.data.data;
          })
      },
      ...mapActions(['getproname'])
    }
  }
</script>

<style scoped>
  #collection{
    width:85%;
    margin: 5% auto;
    padding:10px 0;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .bluepage{
    margin: 2.5%;
  }
</style>
