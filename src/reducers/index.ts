import { combineReducers } from "redux"
import { AppReducer } from "../app/app.reducer"
import { loginReducer } from "../pages/Login/Login.reducer"
import { ProductListReducer } from "../pages/Product/ProductList/ProductList.reducer"
import { ProductItemReducer } from "../pages/Product/ProductItem/ProductItem.reducer"

import { CategoryReducer } from "../pages/Category/Category.reducer"

const rootReducer = combineReducers({
  appReducer: AppReducer,
  loginReducer: loginReducer,
  productListReducer: ProductListReducer,
  productItemReducer: ProductItemReducer,
  categoryReducer: CategoryReducer
})

export default rootReducer
