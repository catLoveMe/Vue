<template>
<div>
  <navigation></navigation>
  <titleBlock mainTitle="商城" subTitle="shop" :breadArg="main"></titleBlock>
  <div style="width: 80%;margin: 0 auto">
    <div class="shoptop">
      <img src="../assets/image/u145.png" alt="">
      <div class="linear"></div>
      <div class="shopchose">
        <template>
          <el-select v-model="value2" placeholder="按价格" class="gethot">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
              @click.native="moneysearch(item.value)">
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select v-model="value3" placeholder="按类别" class="gethot">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
              @click.native="kindsearch(item.label)">
            </el-option>
          </el-select>
        </template>
        <div class="shopsearch" @click="search">&#xe613;</div>
      </div>
    </div>
    <div class="product">
      <div v-if="empty" style="text-align: center"><h2>没有满足搜索条件的哟！</h2></div>
      <pros v-for="iteam in $store.state.cart.shop_list"
            :key="iteam.pro_name"
            :proname="iteam.pro_name"
            :price="iteam.pro_price"
            :pro_id = "iteam"
            :imgsrc="'/apj'+ iteam.pro_img1"
            @click.native="getproname(iteam.pro_name)"></pros>
    </div>
    <el-pagination class="pages"
                   background
                   layout="prev, pager, next"
                   :total="bospage"
                   :page-size="8"
                   prev-text="上一页"
                   next-text="下一页"
                   @current-change="pagechange"
                   v-if="!menber">
    </el-pagination>
  </div>
  <footer-block></footer-block>
</div>
</template>

<script>
  import pros from './common/shopPro.vue'
  import titleBlock from './common/title.vue'
  import footerBlock from './common/footer.vue'
  import navigation from './common/navigation.vue'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'shop',
    components: {
      pros: pros,
      titleBlock: titleBlock,
      footerBlock:footerBlock,
      navigation:navigation
    },
    data () {
      return {
        options2: [{
          value: '1',
          label: '500元以上'
        }, {
          value: '2',
          label: '500元以下'
//                disabled: true
        }, {
          value: '3',
          label: '全部'
        }],
        options3: [{
          value: '选项1',
          label: '茶叶'
        }, {
          value: '选项2',
          label: '茶具'
//                disabled: true
        }, {
          value: '选项3',
          label: '茶食'
        }, {
          value: '选项4',
          label: '全部'
        }],
        value2: '',
        value3: '',
        mykind: '',
        mymoney: '',
        empty: false,
        menber: false,
//        shopPro: [],
        nowpage: 1,
        bospage: 8,
        main: {
          firstTitle: '商城'
        }
      }
    },
    created () {
      this.$axios.post('/api/shopMain.do', {
        page: this.nowpage,
      }).then((resp) => {
//        this.shopPro = resp.data.data;
        this.$store.state.cart.shop_list = resp.data.data;
      });
      this.$axios.post('/api/pageTotal.do', {})
        .then((resp) => {
        this.bospage = resp.data[0].count;
      });
    },
    methods : {
      zz: function (z) {
        console.log(z)
      },
      kindsearch: function (kind) {
        this.mykind=kind;
      },
      moneysearch: function (money) {
        this.mymoney=money;
      },
      search: function () {
        this.nowpage=1;
        this.bospage=8;
        this.$axios.post('/api/selectShop.do', {
          page: this.nowpage,
          kind: this.mykind,
          money: this.mymoney,
        }).then((resp) => {
//          this.shopPro = resp.data;
          this.$store.state.cart.shop_list = resp.data;
          if(this.shopPro.length==0){
            this.empty=true;
          }else {
            this.empty=false;
            this.menber=false;
          }
          if(this.shopPro.length<8){
            this.menber=true;
          }
        });
        this.$axios.post('/api/pageTotal.do', {
          kind: this.mykind,
          money: this.mymoney,
        }).then((resp) => {
          this.bospage = resp.data[0].count;
        });
      },
      pagechange: function (val) {
        this.nowpage = `${val}`;
        this.$axios.post('/api/selectShop.do', {
          page: this.nowpage,
          kind: this.mykind,
          money: this.mymoney,
        }).then((resp) => {
//          this.shopPro = resp.data;
          this.$store.state.cart.shop_list = resp.data;
        });
      },
      ...mapActions(['getproname'])
    },
    computed: {
      ...mapGetters(['shopPro'])
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "tea-font";
    src: url('../assets/icon/tea.ttf');
  }
  .shoptop {
    width: 100%;
    height: 100px;
    position: relative;
    padding-top: 10px;
  }

  .shoptop img {
    float: left;
  }

  .shoptop .linear {
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    height: 50px;
    z-index: -1;
  }

  .shopchose {
    float: right;
    margin-top: 25px;
    background-color: white;
    padding: 0 10px;
  }

  .shopchose .gethot {
    width: 140px;
    margin-right: 10px;
  }
  .shopchose .shopsearch {
    width: 38px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    font-size: 20px;
    color: white;
    background-color: #7EAD54;
    font-family: tea-font;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
  }
  .product{
    text-align: center;
  }
  .pages{
    width: 160px;
    margin: 0 auto;
  }
</style>
