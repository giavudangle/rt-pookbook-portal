import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

export default function CircularUnderLoad() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <CircularProgress disableShrink />
    </div>
  )
}
