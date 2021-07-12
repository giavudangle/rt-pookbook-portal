import React from "react"
import Routes from "../routes"
import { ThemeProvider } from "@material-ui/styles"
import { useTheme } from "../hooks/useAppStyles"
import { Button } from "@material-ui/core"

function App() {
  return (
    <ThemeProvider theme={useTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
