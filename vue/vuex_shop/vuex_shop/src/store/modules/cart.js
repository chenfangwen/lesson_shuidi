// import shop from "../../api/shop"

import shop from "../../api/shop"

const state = {
    items:[],
    checkOutStatus:null
}
const getters = {
    cartProducts(state,getters,rootState){
        return state.items.map(({id,quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice(state,getters){ 
        return getters.cartProducts.reduce((total,product) =>{
            return total+product.quantity*product.price
        },0)
    }
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
    },
    setCheckOutStatus(state,status){
        state.checkOutStatus = status;
    },
    setCartItems(state,{items}){
        state.items = items;
    }
}
const actions = {
    addProductToCart({commit},product){
        // console.log(product)
        if(product.inventory>0){
            commit('setCheckOutStatus',null)
            let cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart',{id:product.id})
                
            }else{
                commit('incrementItemQuantity',cartItem)
            }
            commit("products/decrementProductInventory",{id:product.id},{root:true})
        }
    },
    checkout({commit},products){
        const saveCartItems = [...state.items]  //state.items
        // commit('setCheckOutStatus',null)
        commit('setCartItems',{items:[]})
        shop.buyProducts(
            products,
            () => {commit('setCheckOutStatus','successsful')},
            () => {
                commit('setCheckOutStatus','falied')
                commit('setCartItems',{items:saveCartItems})
            }
        )
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}