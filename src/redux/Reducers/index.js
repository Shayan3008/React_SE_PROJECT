import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
const AllReducers = combineReducers({
    CartReducer: CartReducer
})

export default AllReducers