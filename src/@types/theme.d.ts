declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

interface PaletteIntention {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}
