import shop from "../../api/shop"

const state = {
    all:[]
}
const getters = {

}
const mutations = {
    setProducts(state,products){
        state.all = products
    }
}
const actions = {
    getAllProducts({commit}){
        shop.getProducts(products => {
            // console.log(products)
            commit('setProducts',products)
        })
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}