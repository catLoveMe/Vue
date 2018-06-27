<!--推广页面-->
<template>
  <div class="promoteDetailBlock">
    <navigation></navigation>
    <titleBlock mainTitle="茶叶推广" subTitle="Tea Extension" :breadArg="breadArg"></titleBlock>
    <div class="promoteBlock">
      <el-row>
        <el-col :span="24">
          <router-link :to="{path:'/proDetil',query:{id:item.doc_id}}" v-for="item in promoteImg" :key="item.doc_id">
            <promoteBox :proImg="'/apj/'+item.doc_url" :proTitle="item.doc_title" :proCaption="item.doc_content.substring(0,50)"></promoteBox>
          </router-link>
        </el-col>
      </el-row>

    </div>
    <footerBlock></footerBlock>
  </div>
</template>

<script>
  import promoteBox from '../promote/promoteBox.vue'
  import navigation from '../common/navigation.vue'
  import titleBlock from '../common/title.vue'
  import footerBlock from '../common/footer.vue'
  export default {
    name:'teaPromote',
    data(){
      return{
        promoteImg:[],
        breadArg:{
          firstTitle:'文化推广'
        }
      }
    },
    created () {
      this.$axios.post('/api/getAllDataMuseum.do')
        .then(resp => {
          console.log(resp.data.data)
          this.promoteImg = resp.data.data
        })
    },
    components:{
      promoteBox:promoteBox,
      navigation:navigation,
      titleBlock:titleBlock,
      footerBlock:footerBlock
    }
  }
</script>

<style scoped>
  .promoteDetailBlock{
    overflow: hidden;
  }
  .bluepage{
    text-align: left;
    margin: 2%;
  }
  .promoteBlock{
    width: 80%;
    margin: 5% auto;
  }

  a{
    color: grey;
    text-align: left;
  }


</style>
