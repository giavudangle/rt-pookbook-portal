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
  Input,
  FormControl
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

function ProductItem(props: any) {
  const params = useParams<any | null>()
  const { productItem } = useAppSelector(state => state.productItem)
  const classes = useStyles()

  // const _handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0]
  //     setImage(URL.createObjectURL(img))
  //   }
  // }

  const [loading, setLoading] = React.useState(false)
  const dispatch = useThunkDispatch()

  useEffect(() => {
    dispatch(getProductItem(params.id as string))
  }, [params.id!])

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
            <FormControl
              style={{ display: "flex", flexDirection: "column", margin: 6 }}
            >
              <TextField
                disabled
                id="id"
                label="ID"
                value={productItem?._id}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Loyalty />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
              />
              <TextField
                disabled
                className={classes.fieldContainer}
                id="title"
                label="Book Title"
                value={productItem?.title}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BookOutlined />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
              />
              <TextField
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
                id="price"
                label="Price"
                value={productItem?.price}
              />
              <TextField
                disabled
                style={{ paddingTop: 20 }}
                multiline
                InputProps={{
                  className: classes.textFields
                }}
                fullWidth
                id="des"
                label="Description"
                value={productItem?.description}
              />
              <TextField
                disabled
                id="standard-select-currency"
                label="Category"
                value={productItem?.category}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BookOutlined />
                    </InputAdornment>
                  )
                }}
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                disabled
                id="standard-select-author"
                label="Author"
                value={productItem?.author}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                disabled
                id="standard-select-publisher"
                aria-readonly
                label="Publisher"
                value={productItem?.publisher}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                disabled
                id="standard-select-publisher"
                aria-readonly
                label="Provider"
                value={productItem?.provider}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddShoppingCart />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
                id="stocks"
                label="Stocks"
                value={9999}
              />
              <TextField
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <History />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
                id="createAt"
                label="Created At"
                value="2021-04-26T14:51:46.603Z"
              />
              <TextField
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <History />
                    </InputAdornment>
                  ),
                  className: classes.textFields
                }}
                id="updatedAt"
                label="Updated At"
                value="2021-04-26T14:51:46.603Z"
              />
              <Divider />
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  ) : (
    <CircularUnderLoad />
  )
}

export default ProductItem
