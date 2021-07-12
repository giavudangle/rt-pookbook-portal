import {
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles"

import {
  INFO_PALETTE,
  ERROR_PALETTE,
  WARNING_PALETTE,
  SUCCESS_PALETTE
} from "../utils/useCustomColor"

const drawerWidth = 240

export const useStyles = makeStyles((theme: AugmentedTheme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}))

export const useTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293"
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293",
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
})

export const useCustomButton = makeStyles(theme => ({
  infoButton: {
    backgroundColor: INFO_PALETTE.MAIN,
    color: "#fff"
  },
  warningButton: {
    backgroundColor: WARNING_PALETTE.MAIN,
    color: "#fff"
  },
  successButton: {
    backgroundColor: SUCCESS_PALETTE.MAIN,
    color: "#fff"
  },
  errorButton: {
    backgroundColor: ERROR_PALETTE.MAIN,
    color: "#fff"
  }
}))
