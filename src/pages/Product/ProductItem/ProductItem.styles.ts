import { createStyles, makeStyles, Theme } from "@material-ui/core"
import styled from "styled-components"
import {
  ERROR_PALETTE,
  INFO_PALETTE,
  SUCCESS_PALETTE,
  WARNING_PALETTE
} from "../../../utils/useCustomColor"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      cursor: "default"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
      marginTop: 10
    },
    imageContainer: {},
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      margin: 4,
      justifyContent: "center"
    },
    btnContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between"
    },
    btn: {
      width: "100%",
      marginTop: 10,
      marginRight: 10
    },
    textFields: {
      marginTop: 10,
      padding: 10,
      cursor: "pointer"
    },
    imagePickerContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#b0e0e6",
      padding: 10
    },
    fieldContainer: {
      margin: 10
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    menuItemRoot: {
      backgroundColor: INFO_PALETTE.MAIN
    },
    selectedItem: {
      backgroundColor: WARNING_PALETTE.LIGHT
    }
  })
)
