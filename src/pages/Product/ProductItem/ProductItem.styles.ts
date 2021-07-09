import { createStyles, makeStyles, Theme } from "@material-ui/core"
import styled from "styled-components"

export const useStyles = makeStyles((theme : Theme) => 
  createStyles({
    root:{
      flexGrow:1
    },
    paper:{
      padding:theme.spacing(2),
      textAlign:'left',
      color: theme.palette.text.secondary
    },
    formContainer:{
      display: "flex",
      flexDirection:'column',
      alignItems:'stretch',
      margin:20
    },
    btnContainer:{
      display: "flex",
      flexDirection:'row',
      alignItems:'stretch',
      justifyContent:'space-between',      
    },
    btn:{
      width:'100%',
      marginTop: 10,
      marginRight:10
    },
    textFields :{
      marginTop:10,
      marginRight:10
    }
  })
)