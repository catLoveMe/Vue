const state = {
  //  数据存放的地方
  shop_list: [],
  added: [],
  count: 1,
  countMon: 0,
  arr: []
};

//视图数据过滤的地方，与computed数据依赖
const getters = {
  shopPro: state => state.shop_list,
  cartProducts: state => state.added,
  totalPrice: (state, getters) => {
    console.log(state.added, "cartProducts"); //购物车的数据
    let totalprice = 0;
    getters.cartProducts.forEach(item => {
      totalprice += item.pro_price * item.sc_amount
    });
    return totalprice
  },
  totalNum: (state, getters) => {
    let totalnum = 0;
    getters.cartProducts.forEach(item => {
      totalnum += item.sc_amount
    });
    return totalnum
  }
};

//Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
  addToCart(ctx, product) {
    ctx.commit("add", product)
  },

  clearAllCart(ctx) {
    ctx.commit("clearAll")
  },
  delProduct(ctx, product) {
    ctx.commit('del', product)
  },
  addmony(ctx, product) {
    ctx.commit('addmony', product)
  }
};
//更改Vuex 里面的store里面数据的唯一方法，就是提交muations （即muations是更改store数据的地方），只能同步
const mutations = {
  add(state, product) {
    let record = state.added.find(selfitem => selfitem.pro_id == product.pro_id);
    if (record) {
      record.sc_amount += state.count
    } else {
      if (state.count != 1) {
        state.added.push({ ...product,
          sc_amount: state.count
        });

      } else {
        state.added.push({ ...product,
          sc_amount: 1
        });
        var that = this._vm;
        that.$axios.get("/api/addCartPro.do", {
            params: {
              proId: product.pro_id
            }
          })
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
  clearAll(state) { //清空购物车，将购物车里的数据置为0
    state.added = []
  },
  del(state, product) {
    state.added.map((item, index) => {
      if (item.pro_id === product) {
        state.added.splice(index, 1)
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
