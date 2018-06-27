const state = {
  orderdata:[]
};

const getters = {
  orderdata : state => state.orderdata
};

const actions = {
  addOrder(ctx,order){

    ctx.commit("addorder",order)
  }
};

const mutations = {
  addorder(state,order){

  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

