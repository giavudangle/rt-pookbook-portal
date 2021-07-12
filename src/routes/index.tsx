import React from "react"
import { Router } from "react-router-dom"
import ProductRoutes from "./ProductRoutes"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"
import useCustomHistory from "../utils/useCustomHistory"

const Routes = () => {
  return (
    <Router history={useCustomHistory}>
      <HomeRoutes />
      <ProductRoutes />
      <LoginRoutes />
    </Router>
  )
}

export default Routes
