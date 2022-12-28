
const CART_ACTIONS = {
    ADD: 'ADD_TO_CART',
    DELETE: 'DELETE_FROM_CART',
    EMPTY:'EMPTY_CART'
}

const addItemToCart = (item: object) => {
    return {
        type: CART_ACTIONS.ADD,
        item: item,
    }
}

const deleteFromCart = (itemId: number) => {
    return {
        type: CART_ACTIONS.DELETE,
        itemId: itemId
    }
}


export { addItemToCart, deleteFromCart, CART_ACTIONS }