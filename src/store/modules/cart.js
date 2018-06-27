const state = {
//  数据存放的地方
  shop_list:[],
  added:[],
  count:1,
  countMon:0,
  arr :[]
};

//视图数据过滤的地方，与computed数据依赖
const getters = {
  shopPro : state=> state.shop_list ,
  cartProducts : state => state.added,
  totalPrice:(state,getters)=>{
    console.log(state.added,"cartProducts");
    let totalprice = 0;
    getters.cartProducts.forEach(item=>{
      totalprice += item.pro_price * item.sc_amount
    });
    return totalprice
  },
  totalNum:(state,getters)=>{
    let totalnum = 0;
    getters.cartProducts.forEach(item=>{
      totalnum += item.sc_amount
    });
    return totalnum
  }
};


const actions = {
  addToCart(ctx,product){
    ctx.commit("add",product)
  },

  clearAllCart(ctx){
    ctx.commit("clearAll")
  },
  delProduct(ctx,product){
    ctx.commit('del',product)
  },
  addmony(ctx,product){
    ctx.commit('addmony',product)
  }
};

const mutations = {
  add(state,product){
    let record = state.added.find(selfitem=>selfitem.pro_id == product.pro_id);
    if(record){
      record.sc_amount+= state.count
    }else{
      if(state.count!=1){
        state.added.push({...product,sc_amount:state.count});

      }else {
        state.added.push({...product,sc_amount:1});
        var that = this._vm;
        console.log("添加到购物车");
        that.$axios.get("/api/addCartPro.do",{params:{proId:product.pro_id}})
          .then(function () {
            // that.$axios.get("/api/shoppingCartcheck.do")
            //   .then(function (resp) {
            //     console.log(state,"232323");
                // state.added = resp.data.data;
              // })
          })
      }
      state.count = 1;
    }
  },
  clearAll(state){
    state.added = []
  },
  del(state,product){
  state.added.map((item,index)=>{
      if(item.pro_id === product){
        state.added.splice(index,1)
      }
    })
  },

};

export default {
  state,
  getters,
  actions,
  mutations
}
