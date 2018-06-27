<template>
    <div>
      <div class="xqboss">
        <!--富文本开始-->
        <div v-html="cpxqdata[0].pro_text"></div>
<!--        <div style="width: 80%;height: 120px;margin: 0 auto;position: relative">
          <div style="margin: 0 auto;font-size: 2em;color: #666;line-height: 100px;height: 100px;overflow: hidden;background-color: white;width: 55%">五年陈-烟熏小种</div>
          <hr style="color: #c6c6c6;position: absolute;top: 50px;width: 100%;z-index: -1"/>
          <p style="text-align: center;color: #666;font-size: 12px">选用2012年早春原料，独特的送烟香经过5年的沉淀和转化，口感更加顺滑</p>
        </div>
        <div style="text-align: center;margin-top: 50px">
          <div style="display: inline-block;width: 25%;">
            <img src="/apj/upload/u241.png" alt="" style="width: 100%">
            <div style="margin-top: 20%">
              <h3 style="float: left;line-height: 20px">干茶</h3>
              <p style="float: left;line-height: 20px;text-align:left;margin-left: 20px;width: 70%;font-size: 12px;color: #333">色泽乌褐粗壮，匀齐</p>
            </div>
          </div>
          <div style="display: inline-block;width: 25%;margin: 0 10%">
            <img src="/apj/upload/u239.png" alt="" style="width: 100%">
            <div style="margin-top: 20%">
              <h3 style="float: left;line-height: 20px">茶汤</h3>
              <p style="float: left;line-height: 20px;text-align:left;margin-left: 20px;width: 70%;font-size: 12px;color: #333">汤色黄金透亮，入口甘甜润喉爽滑细腻，唇齿留香，桂圆汤香明显</p>
            </div>
          </div>
          <div style="display: inline-block;width: 25%;">
            <img src="/apj/upload/u243.png" alt="" style="width: 100%">
            <div style="margin-top: 20%">
              <h3 style="float: left;line-height: 20px">叶底</h3>
              <p style="float: left;line-height: 20px;text-align:left;margin-left: 20px;width: 70%;font-size: 12px;color: #333">叶底橙黄悦目舒展饱满，有活力，柔软，韧性好</p>
            </div>
          </div>
        </div>
        <div style="width: 80%;height: 120px;margin: 50px auto;position: relative">
          <div style="margin: 0 auto;font-size: 2em;color: #666;line-height: 100px;height: 100px;overflow: hidden;background-color: white;width: 55%">29年的坚持与努力</div>
          <hr style="color: #c6c6c6;position: absolute;top: 50px;width: 100%;z-index: -1"/>
          <p style="text-align: center;color: #666;font-size: 12px">成立于一九八八年，地处武夷山桐木关保护区，占地一万余平米，拥有茶园基地三千多亩</p>
        </div>
        <div style="text-align: center;width: 60%;margin: 0 auto;">
          <img src="/apj/upload/u111.png" alt="" style="width: 100%">
        </div>-->
        <!--富文本结束-->
      </div>
      <div class="banner">
        <img src="/apj/upload/u235.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'cpxq',
        components: {},
        data () {
            return {
              cpxqdata: [{
                  pro_text: ''
              }]
            }
        },
      created () {
        let name = this.$store.state.prodetailname.proname;
        this.$axios.post('/api/getMes.do', {
          proname: name
        }).then((resp) => {
          this.cpxqdata = resp.data.data;
        });
      }
    }
</script>

<style scoped>
  .xqboss{
    width: 80%;
    margin: 0 auto;
  }
  .banner{
    width: 100%;
    overflow: hidden;
  }
  .banner img{
    width: 30%;
  }
</style>
