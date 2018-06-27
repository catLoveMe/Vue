<template>
    <div>
      <div class="plboss">
        <p class="title">最新评论:</p>
        <div class="procontent">
          <div class="mytalk" v-for="iteam in pldata">
            <div class="inbl myhead">
              <img :src="'/apj'+iteam.user_pic" alt="">
            </div>
            <div class="inbl myans">
              <p><span>{{ iteam.user_name }}</span><span>{{ iteam.com_message_date }}</span></p>
              <p>{{ iteam.com_message_count }}</p>
            </div>
          </div>
<!--          <div class="mytalk">
            <div class="inbl myhead">
              <img src="../assets/image/u54.png" alt="">
            </div>
            <div class="inbl myans">
              <p><span>赵洲</span><span>2017/10/30</span></p>
              <p>水晶糕口感舒适，味道尚佳，很清凉的感觉，非常的好吃，唯一不足的缺点就是量少了。</p>
            </div>
          </div>
          <div class="mytalk">
            <div class="inbl myhead">
              <img src="../assets/image/u54.png" alt="">
            </div>
            <div class="inbl myans">
              <p><span>赵洲</span><span>2017/10/30</span></p>
              <p>水晶糕口感舒适，味道尚佳，很清凉的感觉，非常的好吃，唯一不足的缺点就是量少了。</p>
            </div>
          </div>-->
        </div>
        <textarea name="talk" id="talk" placeholder="立即评论"></textarea>
        <div class="mybtn"><plbtn btnClass="middBtn" btnText="发表评论" @click.native="talkabout"></plbtn></div>

      </div>
      <div class="banner">
        <img src="/apj/upload/u235.png" alt="">
      </div>
    </div>
</template>

<script>
  import plbtn from './common/teaBtn.vue'
    export default {
        name: 'pl',
        components: {
          plbtn: plbtn
        },
        data () {
            return {
              pldata: [{}]
            }
        },
      created () {
        let name = this.$store.state.prodetailname.proname;
        this.$axios.post('/api/proTalk.do', {
          proname: name
        }).then((resp) => {
          this.pldata = resp.data.data;
        });
      },
      methods : {
        talkabout: function () {
          let proid = this.pldata[0].pro_id;
          let text = $("#talk").val();
          $("#talk").val("");
          this.$axios.post('/api/talkInfo.do', {
            proid: proid,
            text: text
          }).then(() => {
            let name = this.$store.state.prodetailname.proname;
            this.$axios.post('/api/proTalk.do', {
              proname: name
            }).then((resp) => {
              this.pldata = resp.data.data;
            });
          });
        }
      }
    }
</script>

<style scoped>
  .inbl{
    display: inline-block;
  }
  .plboss{
    width: 50%;
    margin: 0 auto;
  }
  .plboss .title{
    margin-top: 30px;
    text-align: left;
  }
  .procontent .mytalk{
    width: 100%;
    border-bottom: 1px solid #ccc;
    text-align: left;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .procontent .mytalk .myhead{
    width: 10%;
    height: 10%;
    float: left;
  }
  .procontent .mytalk .myhead img{
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  .procontent .mytalk .myans{
    width: 85%;
    height: 80px;
    margin-left: 10px;
  }
  .procontent .mytalk .myans p{
    font-size: 14px;
    margin-top: 10px;
    color: #333;
  }
  .procontent .mytalk .myans p span{
    display: inline-block;
    width: 40%;
  }
  #talk{
    margin-top: 40px;
    width: 90%;
    height: 100px;
    padding: 10px;
    border: 1px solid  #7EAD54;
    font-size: 16px;
  }
  .mybtn {
    margin-top: 20px;
    width: 95%;
    text-align: right;
  }
  .banner{
    width: 100%;
    overflow: hidden;
  }
  .banner img{
    width: 30%;
  }
</style>
