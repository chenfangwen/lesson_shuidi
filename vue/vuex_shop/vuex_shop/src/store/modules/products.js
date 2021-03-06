import shop from "../../api/shop"

const state = {
    all:[]
}
const getters = {

}
const mutations = {
    setProducts(state,products){
        state.all = products
    },
    decrementProductInventory(state,{id}){
        const product = state.all.find(item => item.id === id)
        product.inventory--;
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