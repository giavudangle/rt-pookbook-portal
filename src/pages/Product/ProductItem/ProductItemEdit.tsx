import React from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../../../layouts/_LayoutShared"
import { useStyles } from "./ProductItem.styles"
import {
  Loyalty,
  Book,
  Money,
  MonetizationOn,
  Comment,
  ShowChart,
  Contacts
} from "@material-ui/icons"

import {
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Paper,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core"

import CircularUnderLoad from "../../../components/Loading/CustomCircularUnderload"
import { useEffect } from "react"
import { useThunkDispatch } from "../../../hooks/useThunkDispatch"
import { getProductItem } from "./ProductItem.thunks"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useMemo } from "react"

const MOCK = [
  {
    _id: "60a0ed23b1125a0ca50ad2a8",
    name: "Tống Mặc",
    createdAt: "2021-04-28T04:12:32.965Z",
    updatedAt: "2021-04-28T04:12:32.965Z",
    __v: 0
  },
  {
    _id: "60a0f2a8b1125a0ca50b8be0",
    name: "An Nhiên",
    createdAt: "2021-04-28T04:12:32.965Z",
    updatedAt: "2021-04-28T04:12:32.965Z",
    __v: 0
  },
  {
    _id: "60a8e0cfb1125a0ca52ccaf1",
    name: "Nguyễn Nhật Ánh",
    createdAt: "2021-04-28T04:12:32.965Z",
    updatedAt: "2021-04-28T04:12:32.965Z",
    __v: 0
  }
]

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
]

function ProductItemEdit(props: any) {
  const params = useParams<any | null>()
  const classes = useStyles()
  const dispatch = useThunkDispatch()

  const { productItem, loading } = useAppSelector(state => state.productItem)

  const { control, handleSubmit, reset, register } = useForm<IProduct>({
    defaultValues: useMemo(() => {
      return { ...(productItem ?? {}) }
    }, [productItem]),
    shouldUnregister: true
  })

  useEffect(() => {
    dispatch(getProductItem(params.id as string)).then(res =>
      reset({ ...res.payload.data.product })
    )
  }, [params.id!])

  const onSubmit: SubmitHandler<IProduct> = data => {
    console.log(data)
  }

  const _handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      //setImage(URL.createObjectURL(img))
    }
  }

  const [currency, setCurrency] = React.useState("EUR")

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
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="_id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Product ID"
                    disabled
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
                name="title"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Product Title"
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
              <Controller
                name="price"
                defaultValue={0}
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Product Price"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MonetizationOn />
                        </InputAdornment>
                      ),
                      className: classes.textFields
                    }}
                  />
                )}
              />
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    multiline
                    label="Product Description"
                    InputProps={{
                      className: classes.textFields
                    }}
                  />
                )}
              />
              <Controller
                name="stocks"
                defaultValue={1}
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    type="number"
                    label="Product Stocks"
                    InputProps={{
                      inputProps: {
                        max: 10000,
                        min: 10
                      },
                      className: classes.textFields,
                      startAdornment: (
                        <InputAdornment position="start">
                          <ShowChart />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
              <Controller
                name="author"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-select-author"
                    select
                    label="Select Author"
                    variant="filled"
                  >
                    {MOCK.map(option => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-select-category"
                    select
                    label="Select Category"
                    variant="filled"
                  >
                    {MOCK.map(option => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="provider"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-select-provider"
                    select
                    label="Select Provider"
                    variant="filled"
                  >
                    {MOCK.map(option => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Divider />
              <Controller
                name="publisher"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-select-publisher"
                    select
                    label="Select Publisher"
                    variant="filled"
                  >
                    {MOCK.map(option => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <input type="submit" />
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  ) : (
    <CircularUnderLoad />
  )
}

export default ProductItemEdit
