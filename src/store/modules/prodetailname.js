/**
 * Created by Administrator on 2017/12/15.
 */

const state = {
  proname: ''
};
const getters = {
  bosproname: state => state.proname
};

const actions = {
  getproname(ctx,n){
    ctx.commit("getproname",n)
  },

}

const mutations = {
  getproname(state,n){
    state.proname = n;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
}
