import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "../guards/AuthenticatedGuard"
import { PATH } from "../constants/paths"
import Loading from "../components/Loading/CustomCircularUnderload"
const ProductList = lazy(() => import("../pages/Product/ProductList"))
const ProductItem = lazy(() => import("../pages/Product/ProductItem"))
const ProductItemEdit = lazy(
  () => import("../pages/Product/ProductItem/ProductItemEdit")
)
const ProductItemCreate = lazy(
  () => import("../pages/Product/ProductItem/ProductItemCreate")
)

export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={`${PATH.PRODUCT}/create`}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductItemCreate />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={`${PATH.PRODUCT}/:id`}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductItem />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={`${PATH.PRODUCT}/edit/:id`}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductItemEdit />
          </Suspense>
        )}
      />
    </Switch>
  )
}
