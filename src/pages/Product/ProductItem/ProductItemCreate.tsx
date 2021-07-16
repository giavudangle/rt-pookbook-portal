import React, { useCallback, ReactNode, useRef } from "react"
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
import { useAppSelector } from "../../../hooks/useAppSelector"
import { useForm, SubmitHandler, Controller, Control } from "react-hook-form"
import logo from "../../../assets/images/logo.png"
import { fetchCategories } from "../../Category/Category.thunks"
import { fetchAuthors } from "../../Author/Author.thunks"
import { fetchProviders } from "../../Provider/Provider.thunks"
import { fetchPublishers } from "../../Publisher/Publisher.thunks"
import { useState } from "react"
import { createProductApi } from "../../../apis/product.api"
import { rootApi } from "../../../apis/root.api"
import { isNull } from "lodash"
import { createProductItem } from "./ProductItem.thunks"
import useCustomHistory from "../../../utils/useCustomHistory"
import { PATH } from "../../../constants/paths"

interface IReactHookFormSelect {
  name: string
  label: string
  control: Control<any>
  defaultValue?: any
  children: ReactNode
}

const MOCK_BLOG =
  "https://res.cloudinary.com/codingwithvudang/image/upload/v1622117732/logo_hcbfie.png"

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
  const classes = useStyles()
  const dispatch = useThunkDispatch()
  const [image, setImage] = useState("")
  const imageRef = useRef<any>(null)
  const {loading} = useAppSelector(state => state.productItemReducer)
  const { categories } = useAppSelector(state => state.categoryReducer)
  const { authors } = useAppSelector(state => state.authorReducer)
  const { providers } = useAppSelector(state => state.providerReducer)
  const { publishers } = useAppSelector(state => state.publisherReducer)

  const { control, handleSubmit, reset, register } =
    useForm<IProductItemCreate>({
      defaultValues: {},
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

  const generateBlob = () => {
    return fetch(logo)
    .then(res => res.blob())
  }


  const onSubmit: SubmitHandler<IProductItemCreate> = async (
    data: IProductItemCreate
  ) => {
    const formData = new FormData()
    for (var key in data) {
      formData.append(key, data[key])
    }
    // Optimize here
    if (!imageRef.current.files.length) {
        generateBlob()
        .then(async blob => {
          formData.append("imageUrl", blob, "logo.png")
          await dispatch(createProductItem(formData))
          useCustomHistory.push(PATH.PRODUCT)
        })
    } else {
      formData.append(
        "imageUrl",
        imageRef.current.files[0],
        imageRef.current.files[0].name
      )
      await dispatch(createProductItem(formData))
      useCustomHistory.push(PATH.PRODUCT)
    }
  }


  const _handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(URL.createObjectURL(img))
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
              <img width="100%" height="auto" src={!image ? logo : image} />
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
                name="categoryId"
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
                name="authorId"
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
                name="providerId"
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
                name="publisherId"
                label="Select publisher"
              >
                {publishers.map(option => (
                  <MenuItem key={option.name} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
              {/* <Controller
                name="imageUrl"
                control={control}
                render={({ field }) => (
                  <input {...field} onChange={_handleSelectFile} type="file" name="imageUrl" />
                )}
              /> */}
              <input
                onChange={_handleSelectFile}
                ref={imageRef as any}
                type="file"
                name="imageUrl"
              />

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
