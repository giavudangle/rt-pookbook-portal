import Drawer from "@material-ui/core/Drawer"
import clsx from "clsx"
import { useStyles } from "../hooks/useAppStyles"
import { useState } from "react"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import IconButton from "@material-ui/core/IconButton"
import { mainListItems, secondaryListItems } from "./_ListItem"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"

const DrawerBar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  )
}

export default DrawerBar
