import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM
} from './cartTypes';


export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = item =>{ 
    console.log('addItem')
    return ({
    type: ADD_ITEM,
    payload: item
})}

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id
})

export const clearItemFromCart = id => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: id
})