<template>
  <div id="box3_sub1">
    <div>
      <input type="file" id="file" @change="uploading($event)"/>
      <button style="cursor: pointer" @click="submit($event)">上传图片</button>
      <p>图片支持jpg\png\svg格式(svg格式效果更好)</p>
    </div>
    <div>图片素材</div>
    <showbox id="imgBox1" v-for="item in imgArr"
    :imgsrc="item.pack_img_url" :key="item.pack_img_id"
             @clicked="addNew(item.pack_img_url)">

    </showbox>
  </div>
</template>
<script>
  import showbox from "./showbox.vue"
    export default {
      name:"imgBox",
      data(){
          return{
            imgArr:[],
            imgsrc:""
          }
      },
      components:{
        showbox:showbox
      },
      created(){
        this.$axios.get("/api/showImg.do")
          .then(data=>{
            var myData = data.data.data;
            this.imgArr=myData
          })
      },
      methods:{
        //添加选中图片至Box2盒子上
          addNew(obj){
            var box2Obj = document.getElementById("box2");
            box2Obj.getElementsByTagName("img")[0].setAttribute("src",obj);
          },
        //获取图片
          uploading(event){
            this.file = event.target.files[0];//获取文件
            var windowURL = window.URL || window.webkitURL;
            this.file = event.target.files[0];
            //创建图片文件的url
            this.src = windowURL.createObjectURL(event.target.files[0]);
          },
        //上传图片
          submit(){
            event.preventDefault();//取消默认行为
            let formdata = new FormData();
            formdata.append('file',this.file);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
              }
            };
            this.$axios.post("/api/uploadImg.do",formdata,config)
              .then(data=>{
                this.imgsrc = data.data.data;
                var src = '/api'+this.imgsrc;
                var canvas1Obj = document.getElementById("myCanvas1");
                canvas1Obj.getElementsByTagName("img")[0].setAttribute("src",src)
              })
//            this.$axios({
//              type:"post",
//              url:"/uploadImg.do",
//              data:form
//            })
//              .then(resp=>{
//                  console.log(resp)
//              })
        },
        //更新数据
          update(params){
          this.$axios.get("/api/showImg1.do",{params:{myId:params}})
            .then(data=>{
              var myData = data.data.data;
              this.imgArr=myData
            })
        }
      }
    }


</script>
<style scoped>
  #box3_sub1{
    width: 380px;
    position: relative;
    top: 35px;
  }
  #box3_sub1>div:nth-of-type(1){
    border-bottom: 1px solid rgb(242,242,242);
    height: 55px;width: 100%;
  }
  #box3_sub1>div:nth-of-type(1)>input{
    position: absolute;
    left: 27%;
    outline: none;
  }
  #box3_sub1>div:nth-of-type(1)>button{
    background-color: rgb(126,173,84);
    color: white;
    width: 20%;height:45%;
    border-radius: 10px;
    border: none;outline: none;
    margin-left: -75%;
    margin-top: 4%;
  }
  #box3_sub1>div:nth-of-type(1)>p{
    position: absolute;
    text-align: left;
    font-size: 0.8em;
    left: 27%;
    margin-top: -2%;
    width: 100%;
  }
  #box3_sub1div:nth-of-type(2){
    height: 15px;
    margin-top: 2%;
    border-top: 1px solid rgb(242,242,242);
  }
</style>
