<template>
    <div id="app">
        <button :class="btnClass" @click="clickBtn">{{btnText}}</button>
    </div>
</template>

<script>
    export default {
        name:"teaBtn",
        props:['btnClass','btnText'],
      methods:{
        clickBtn(){
            console.log("click");
            this.$emit("clickBtn");
        }
      }
    }
</script>

<style lang="less" scoped>
   .teaBtn(@padding,@backColor:#8EB45E){
     outline: none;
     border: none;
     color: white;
     border-radius:30px;
     padding:@padding;
     background-color: @backColor;
   }
   button:hover{
     cursor: pointer;
   }
   /*大*/
   .bigBtn{
     .teaBtn(12px 50px)
   }
   /*中*/
   .middBtn{
    .teaBtn(9px 46px)
  }
  /*小*/
   .smllBtn{
     .teaBtn(6px 45px)
   }


</style>
