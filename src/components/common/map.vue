<template>
  <!--container-->
  <div>
  <div class="m-t-10">
    <a class="mint-cell mint-field">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
          <!--<span class="mint-cell-text">输入地址</span>-->
        </div>
        <div class="mint-cell-value">
          <input v-model="address_detail" type="text" id="suggestId"  name="address_detail" class="mint-field-core text-right" style="border: 0">
        </div>
      </div>
    </a>
  </div>
  <div id="allmap" style="width: 100%;height:300px;border: 0;overflow:hidden;"></div>
  <!--container end-->
  </div>

</template>


<script>
  import BMap from 'BMap'

  export default {
    components: {
    },
    data: () => ({
      headerData: {
        title: '办公地址',
        toLink: ''
      },
      address_detail: null, // 详细地址
      userlocation: {lng: '', lat: ''}
    }),
    created () {
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
      this.loadMap()
      // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图
    },
    mounted () {
      this.ready()
    },
    methods: {
      loadMap: function () {
        // setTimeout(this.ready, 0)
      },
      ready: function () {
          $(".BMap_cpyCtrl span").hide();
        var th = this
        var map = new BMap.Map('allmap')
        var point = new BMap.Point(104.07,30.67) // 创建点坐标
        map.centerAndZoom(point, 12)
        map.enableScrollWheelZoom()    // 启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom()    // 启用地图惯性拖拽，默认禁用
        map.addControl(new BMap.NavigationControl())  // 添加默认缩放平移控件
        map.addControl(new BMap.OverviewMapControl()) // 添加默认缩略地图控件
        map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT' }))   // 右下角，打开
        // 建立一个自动完成的对象
        var ac = new BMap.Autocomplete({'input': 'suggestId', 'location': map})
        var myValue
        ac.addEventListener('onconfirm', function (e) {    // 鼠标点击下拉列表后的事件
          var _value = e.item.value
          myValue = _value.province + _value.city + _value.district + _value.street + _value.business
          this.address_detail = myValue
//          alert(this.address_detail)
          setPlace()
        })

        function setPlace () {
          map.clearOverlays()   // 清除地图上所有覆盖物
          function myFun () {
            th.userlocation = local.getResults().getPoi(0).point    // 获取第一个智能搜索的结果
            map.centerAndZoom(th.userlocation, 19)
            map.addOverlay(new BMap.Marker(th.userlocation))    // 添加标注
//            alert(JSON.stringify(th.userlocation))
          }
          var local = new BMap.LocalSearch(map, { // 智能搜索
            onSearchComplete: myFun
          })
          local.search(myValue)
        }
        var map = new BMap.Map('allmap')
         map.enableScrollWheelZoom(true)
         console.log(map)
         var localSearch = new BMap.LocalSearch(map)
         // localSearch.enableAutoViewport() // 允许自动调节窗体大小
         map.clearOverlays() // 清空原来的标注
         localSearch.setSearchCompleteCallback(function (searchResult) {
         var poi = searchResult.getPoi(0)
         map.centerAndZoom(poi.point, 20)
         var point = new BMap.Point(poi.point.lng, poi.point.lat)
         var marker = new BMap.Marker(point) // 创建标注，为要查询的地方对应的经纬度
         map.addOverlay(marker)
         });
         localSearch.search('四川省成都市国信安')
      }
    }
  }
</script>

<style>
  .anchorBL img{
    display:none;
  }
  .BMap_cpyCtrl span{
    display: none;
  }
</style>
