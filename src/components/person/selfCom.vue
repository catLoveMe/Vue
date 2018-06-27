<template>
  <div class="outDiv">
    <span class="snow">*</span>
    <div class="btn-style">
      <span>{{word}}</span>
      <input type="text" @click="extendS($event)" @blur="getCor($event)" :value="perMess">
    </div>
  </div>
</template>



<script>
    export default{
        name:'selfCom',
        data:function () {
          return {

          }
        },
      props:["word","perMess"],
      methods:{
        extendS :function (event) {
//            console.log(this.$refs.input1.value);
          var e = event.currentTarget;
          $(e).next().css("animation","linearmove .3s forwards");
          $(e).next().css("opacity","1");
          $(e).prev().css({top:"-30px",left:"5px"})
        },
        getCor(){
          var e = event.currentTarget;
          $(e).next().css("animation","");
          $(e).next().css("opacity","0");
          $(e).prev().css({top:"-25px",left:"0px"})
        }
      },
      filters:{
            addMoney:function (value) {
                var result ;
                result = "￥"+value;
                return  result;
            }
      }
    }

</script>

<style scoped>
  .btn-style span{
    position: absolute;
    left: 0;
    top: -25px;
    padding-bottom: 4%;
    color: grey;
    transition: all .2s linear;
  }
  .btn-style{
    width:50%;
    position: relative;
    margin-top: 5%;
    display: inline-block;

  }
  input[type=text]{
    width:100%;
    outline: none;
    border: none;
    border-bottom: 1px solid gainsboro;
  }
  .btn-style>div{
    width:100%;
    border: 1px solid #8eb45e;
    position: absolute;
    bottom: 0;
    left:0;
    transform: scaleX(0);
  }
  @keyframes linearmove {
    10%{
      opacity: 1;
      transform: scaleX(0.1);
    }

    50%{
      transform: scaleX(0.5);
    }

    100%{
      transform: scaleX(1);
    }
  }
  .snow{
    padding-right: 3%;
    font-size: 30px;
    color: #8eb45e;
  }
  .outDiv{
    position: relative;
    margin-top: 8%;
  }
</style>
