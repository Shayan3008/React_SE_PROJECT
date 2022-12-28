import { CART_ACTIONS } from '../Actions/CartActions'

const CartReducer = (state: Array<object> = [], action: any) => {
    switch (action.type) {
        case CART_ACTIONS.ADD:
            return [...state, action.item]
        case CART_ACTIONS.DELETE:
            return state.filter((e: any) => e.id !== action.itemId)
        case CART_ACTIONS.EMPTY:
            return []
        default:
            return state
    }
}

export default CartReducer