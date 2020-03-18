<template>
    <div class="cart">
        <!-- <hr/> -->
        <h2>your cart</h2>
        <p v-show="!products.length">please add product</p>
        <div class="">
            <ul>
                <li v-for="(item,index) in products" :key="index">
                    {{item.title}}{{"    "+item.price}}*{{item.quantity}}
                </li>
            </ul><br>
            Total:{{total}}<br>
            checkout:{{checkOutStatus}}<br>
            <button :disabled="!products.length" @click="checkout(products)">checkout</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            items:(state) => state.cart.items,
            checkOutStatus:(state) => state.cart.checkOutStatus
        }),
        ...mapGetters('cart',{
            products:'cartProducts',
            total:'cartTotalPrice'
        })
    },
    created() {
        console.log(this.$store.state.cart,this.$store.state.products)
    },
    methods:{
        checkout(products){
            this.$store.dispatch('cart/checkout')
        }
    }
}
</script>