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
  Loyalty
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
  InputAdornment
} from "@material-ui/core"

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
  const params = useParams()
  const classes = useStyles()
  const [category, setCategory] = React.useState("Sách văn học")
  const [author, setAuthor] = React.useState("Tống Mạc")
  const [publisher, setPublisher] = React.useState("Tống Mạc")
  const [provider, setProvider] = React.useState("Tống Mạc")

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }

  const handleChangePublisher = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublisher(event.target.value)
  }

  const handleChangeProvider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvider(event.target.value)
  }

  return (
    <MainLayout>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <img
              width="100%"
              height="100%"
              src="https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.6435-9/151284066_207254161142817_5812038792384707893_n.png?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=GqSAE84ZaJoAX9hDuSm&_nc_ht=scontent.fpnh22-3.fna&oh=e335456012a78fdc455d02b038eb4484&oe=60ED45B1"
            />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography>Product Detail</Typography>

            <form className={classes.formContainer}>
              <TextField
                disabled
                style={{ margin: 20 }}
                id="id"
                label="ID"
                value="1"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Loyalty />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ margin: 20 }}
                id="title"
                label="Title"
                value="Cho tôi xin 1 vé đi tuổi thơ"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BookOutlined />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  )
                }}
                style={{ margin: 20 }}
                id="price"
                label="Price"
                value={300000}
              />
              <TextField
                style={{ margin: 20 }}
                id="standard-select-currency"
                select
                label="Category"
                value={category}
                onChange={handleChangeCategory}
                helperText="Please select category"
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
                style={{ margin: 20 }}
                id="standard-select-author"
                select
                label="Author"
                value={author}
                onChange={handleChangeAuthor}
                helperText="Please select author"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ margin: 20 }}
                id="standard-select-publisher"
                select
                label="Publisher"
                value={publisher}
                onChange={handleChangePublisher}
                helperText="Please select publisher"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ margin: 20 }}
                id="standard-select-publisher"
                select
                label="Provider"
                value={provider}
                onChange={handleChangeProvider}
                helperText="Please select provider"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              >
                {authors.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddShoppingCart />
                    </InputAdornment>
                  )
                }}
                style={{ margin: 20 }}
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
                  )
                }}
                style={{ margin: 20 }}
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
                  )
                }}
                style={{ margin: 20 }}
                id="updatedAt"
                label="Updated At"
                value="2021-04-26T14:51:46.603Z"
              />
              <Divider />
              <div className={classes.btnContainer}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default ProductItem
