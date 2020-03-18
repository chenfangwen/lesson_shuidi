// import shop from "../../api/shop"

const state = {
    items:[],
    checkOutStatus:null
}
const getters = {

}
const mutations = {
    pushProductToCart(state,{id}){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuantity(state,{id}){
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++;
    }
}
const actions = {
    addProductToCart({commit},product){
        // console.log(product)
        if(product.inventory>0){
            let cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart',{id:product.id})
                
            }else{
                commit('incrementItemQuantity',cartItem)
            }
        }
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}