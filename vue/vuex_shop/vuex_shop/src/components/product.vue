<template>  
    <div class="">
        <h1>product</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}}-{{product.price}}-{{product.inventory}}
                <br>
                <button :disabled="!product.inventory" @click="addProductToCart(product)">add to shopcart</button>
            </li>
        </ul>
        
    </div>
    
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    computed:mapState({
        products:(state) => state.products.all
    }),
    created(){
        this.$store.dispatch('products/getAllProducts')
        // console.log(this.$store.state.products)
    },
    methods:mapActions('cart',['addProductToCart'])
}
</script>