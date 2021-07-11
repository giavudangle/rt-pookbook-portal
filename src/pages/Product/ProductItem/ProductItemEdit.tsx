import React from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../../../layouts/_LayoutShared"
import { useStyles } from "./ProductItem.styles"
import {
  BookOutlined,
  AttachMoney,
  AccountCircle,
  AddShoppingCart,
  History,
  Loyalty,
  Image,
  Book
} from "@material-ui/icons"

import {
  CssBaseline,
  TextField,
  Container,
  Typography,
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Button,
  Divider,
  MenuItem,
  InputAdornment,
  Input
} from "@material-ui/core"
import { useRef } from "react"
import { CircularProgress } from "@material-ui/core"

import CustomCircularUnderload from "../../../components/Loading/CustomCircularUnderload"
import CircularUnderLoad from "../../../components/Loading/CustomCircularUnderload"
import { useEffect } from "react"
import { useThunkDispatch } from "../../../hooks/useThunkDispatch"
import { getProductItem } from "./ProductItem.thunks"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { InputProps } from "@material-ui/core"
import {useForm,useController,UseControllerProps,SubmitHandler,Controller,UseFormProps} from 'react-hook-form'
import { usePrevious } from "../../../hooks/usePrevious"

const categories = [
  {
    value: "Sách văn học",
    label: "Sách văn học"
  },
  {
    value: "Sách kinh tế",
    label: "Sách kinh tế"
  },
  {
    value: "Sách kỹ năng sống",
    label: "Sách kỹ năng sống"
  }
]

const authors = [
  {
    value: "Tống Mạc",
    label: "Tống Mạc"
  },
  {
    value: "Tống Đình",
    label: "Tống Đình"
  },
  {
    value: "Tống Thiên",
    label: "Tống Thiên"
  }
]








function ProductItemEdit(props: any) {
  const params = useParams<any | null>()
  const classes = useStyles()

  const _handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      //setImage(URL.createObjectURL(img))
    }
  }

  const dispatch = useThunkDispatch()

  const { productItem,loading } = useAppSelector(state => state.productItem)

  useEffect(() => {
    dispatch(getProductItem(params.id as string))

  }, [params.id!])



  const {control,handleSubmit} = useForm<IProduct>()

  const onSubmit: SubmitHandler<IProduct> = data => {
    console.log(data)
  }; 

  const [id,setId] = React.useState(productItem?._id)
  const [title,setTitle] = React.useState(productItem?.title)

  console.log('====================================');
  console.log(productItem);
  console.log('====================================');

  console.log('====================================');
  console.log(title,id);
  console.log('====================================');

  // PREFILL DATA


  return !loading ? (
    <MainLayout>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item lg={5} xs={1} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Product Image</Typography>
            <div>
              <img width="100%" height="auto" src={productItem?.url} />
            </div>
          </Paper>
        </Grid>
        <Grid item lg={7} xs={7} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Product Detail</Typography>
            <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='_id'
                    control={control}                 
                    render={({field}) => (
                        <TextField
                        {...field}
                        label='Product ID'
                        disabled    
                        value={id}            
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Loyalty />
                            </InputAdornment>
                          ),
                          className: classes.textFields
                        }}
                      />
                    )}
                />
                 <Controller
                    name='title'
                    control={control}
                    render={({field}) => (
                        <TextField
                        {...field}
                        label='Product Title'
                        value={title}                 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Book />
                            </InputAdornment>
                          ),
                          className: classes.textFields
                        }}
                      />
                    )}
                />
                <input type='submit'/>
            </form>

          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  ) : (
    <CircularUnderLoad />
  )
}

export default ProductItemEdit
