/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
    CLEAR_CART,
    DECREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT,
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_SEARCH_SHOPS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state,{address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,{shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state,{userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state) {
        state.userInfo = {}
    },

    [RECEIVE_RATINGS](state,{ratings}) {
        state.ratings = ratings
    },

    [RECEIVE_INFO](state,{info}) {
        state.info = info
    },

    [RECEIVE_GOODS](state,{goods}) {
        state.goods = goods
    },

    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){ // 第一次增加
            // food.count = 1 // 新增属性，没有数据绑定
            Vue.set(food,'count',1)
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },

    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count === 0){
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },

    [CLEAR_CART](state) {
        // 清除food中的count
        state.cartFoods.forEach(food => {
            food.count = 0
        });
        // 移除购物车中所有购物项
        state.cartFoods = []
    },

    [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
        state.searchShops = searchShops
    },

}