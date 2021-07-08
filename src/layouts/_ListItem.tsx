import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import DashboardIcon from "@material-ui/icons/Dashboard"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import BookIcon from "@material-ui/icons/Book"

import PeopleIcon from "@material-ui/icons/People"
import BarChartIcon from "@material-ui/icons/BarChart"
import LayersIcon from "@material-ui/icons/Layers"
import AssignmentIcon from "@material-ui/icons/Assignment"
import { Switch, Route, Link } from "react-router-dom"

{
  /* <Switch>
<AuthenticatedGuard
  exact
  path={PATH.HOME}
  component={() => (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>          
  )}
/>
</Switch> */
}

export const mainListItems = (
  <div>
      <ListItem component={Link} to='/' button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

   
      <ListItem button component={Link} to='/product'>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem button component={Link} to='/orders'>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
