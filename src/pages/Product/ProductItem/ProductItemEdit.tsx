import React, { useCallback, ReactNode } from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../../../layouts/_LayoutShared"
import { useStyles } from "./ProductItem.styles"
import { Loyalty, Book, MonetizationOn, ShowChart } from "@material-ui/icons"

import {
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Paper,
  InputAdornment,
  FormControl,
  MenuItem,
  Button
} from "@material-ui/core"

import CircularUnderLoad from "../../../components/Loading/CustomCircularUnderload"
import { useEffect } from "react"
import { useThunkDispatch } from "../../../hooks/useThunkDispatch"
import { fetchProductItem } from "./ProductItem.thunks"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { useForm, SubmitHandler, Controller, Control } from "react-hook-form"
import { useMemo } from "react"
import { fetchCategories } from "../../Category/Category.thunks"
import { fetchAuthors } from "../../Author/Author.thunks"
import { fetchProviders } from "../../Provider/Provider.thunks"
import { fetchPublishers } from "../../Publisher/Publisher.thunks"

interface IReactHookFormSelect {
  name: string
  label: string
  control: Control<any>
  defaultValue?: any
  children: ReactNode
}

const ReactHookFormSelect: React.FC<IReactHookFormSelect> = ({
  name,
  label,
  defaultValue,
  children,
  control,
  ...props
}) => {
  const selectId = `${name}-select`
  return (
    <FormControl {...props}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id={selectId}
            select
            label={label}
            variant="filled"
            value={field.value ? field.value : {}}
          >
            {children}
          </TextField>
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </FormControl>
  )
}

function ProductItemEdit(props: any) {
  const params = useParams<any | null>()
  const classes = useStyles()
  const dispatch = useThunkDispatch()

  const { productItem, loading } = useAppSelector(
    state => state.productItemReducer
  )

  const { categories } = useAppSelector(state => state.categoryReducer)
  const { authors } = useAppSelector(state => state.authorReducer)
  const { providers } = useAppSelector(state => state.providerReducer)
  const { publishers } = useAppSelector(state => state.publisherReducer)

  const { control, handleSubmit, reset, register } = useForm<IProduct>({
    defaultValues: useMemo(() => {
      return { ...(productItem ?? {}) }
    }, [productItem]),
    shouldUnregister: true
  })

  const fetchMemoizedCategories = useCallback(() => {
    dispatch(fetchCategories())
  }, [categories])

  const fetchMemoizedAuthors = useCallback(() => {
    dispatch(fetchAuthors())
  }, [authors])

  const fetchMemoizedProviders = useCallback(() => {
    dispatch(fetchProviders())
  }, [providers])

  const fetchMemoizedPublishers = useCallback(() => {
    dispatch(fetchPublishers())
  }, [publishers])

  useEffect(() => {
    fetchMemoizedCategories()
    fetchMemoizedAuthors()
    fetchMemoizedProviders()
    fetchMemoizedPublishers()
  }, [])

  useEffect(() => {
    dispatch(fetchProductItem(params.id as string)).then(res => {
      reset({ ...res.payload!.data.product })
    })
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
              <ReactHookFormSelect
                control={control}
                name="category"
                label="Select category"
              >
                {categories.map(option => (
                  <MenuItem key={option.name} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
              <ReactHookFormSelect
                control={control}
                name="author"
                label="Select author"
              >
                {authors.map(option => (
                  <MenuItem key={option.name} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
              <ReactHookFormSelect
                control={control}
                name="provider"
                label="Select provider"
              >
                {providers.map(option => (
                  <MenuItem key={option.name} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
              <ReactHookFormSelect
                control={control}
                name="publisher"
                label="Select publisher"
              >
                {publishers.map(option => (
                  <MenuItem key={option.name} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
              <Button
                style={{ marginTop: 10 }}
                type="submit"
                color="primary"
                variant="contained"
              >
                SUBMIT
              </Button>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  ) : (
    <CircularUnderLoad />
  )
}

export default React.memo(ProductItemEdit)
