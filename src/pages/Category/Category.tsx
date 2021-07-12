import React from "react"
import MainLayout from "../../layouts/_LayoutShared"
import DashBoard from "../../layouts/_Dashboard"
import Drawer from "../../layouts/_DrawerBar"
import MainAppBar from "../../layouts/_MainAppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useStyles } from "../../hooks/useAppStyles"
import Chart from "../../layouts/_Chart"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Link from "@material-ui/core/Link"
import clsx from "clsx"
import Deposits from "../../layouts/_Deposits"

export default function Home() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <MainLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}
