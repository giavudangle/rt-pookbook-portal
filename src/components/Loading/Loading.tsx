import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
export default function Loading() {
  return (
    <CircularProgress
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  )
}
