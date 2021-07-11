import { useStyles } from "./ProductList.styles"
import React, { useState } from "react"
import MainLayout from "../../../layouts/_LayoutShared"
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
  TableContainer,
  FormControlLabel,
  Switch,
  TablePagination,
  Button
} from "@material-ui/core"

import { EnhancedTableToolbar, EnhancedTableHead } from "./components"
import { stableSort } from "../../../helpers/sort"
import { getComparator } from "../../../helpers/comparator"

import { Link, useHistory } from "react-router-dom"
import { PATH } from "../../../constants/paths"
import { useThunkDispatch } from "../../../hooks/useThunkDispatch"
import { useEffect } from "react"
import { getProductList } from "./ProductList.thunks"
import { useAppSelector } from "../../../hooks/useAppSelector"

interface IDataFactory {
  id: string
  title: string
  price: number
  description: string
  url: string
  thumb: string
  stocks: number
  author: string
  category: string
  provider: string
  publisher: string
  createdAt: string
  updatedAt: string
}

function DataFactory(payload: IDataFactory) {
  return {
    id: payload.id,
    title: payload.title,
    price: payload.price,
    description: payload.description,
    url: payload.url,
    thumb: payload.thumb,
    stocks: payload.stocks,
    author: payload.author,
    category: payload.category,
    provider: payload.provider,
    publisher: payload.publisher,
    createdAt: payload.createdAt,
    updatedAt: payload.updatedAt
  }
}


interface IOwnProps {}
type Order = "asc" | "desc"

const ProductList: React.FC<IOwnProps> = props => {
  const classes = useStyles()
  const [order, setOrder] = useState<Order>("asc")
  const [orderBy, setOrderBy] = useState<keyof IProduct>("title")
  const [selected, setSelected] = useState<string[]>([])
  const [page, setPage] = useState<number>(0)
  const [dense, setDense] = useState<boolean>(false)
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  
  const history = useHistory()
  const dispatch = useThunkDispatch();
  const {productList} = useAppSelector(state => state.productList)

  useEffect(() => {
    dispatch(getProductList())
  },[])

  console.log('====================================');
  console.log(productList);
  console.log('====================================');




  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IDataFactory
  ) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = productList.map(n => n.title)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = [] as string[]

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = name => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, productList.length - page * rowsPerPage)

  return (
    <MainLayout>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            titleToolbar="Products List"
            numSelected={selected.length}
          />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={productList.length}
              />
              <TableBody>
                {stableSort(productList as IProduct[], getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.title)
                    const labelId = `enhanced-table-checkbox-${index}`
                    return (
                      <TableRow
                        style={{ cursor: "pointer" }}
                        hover
                        onClick={event => handleClick(event, row.title as any)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.title}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.title}
                        </TableCell>
                        <TableCell>
                          <Avatar style={{}} src={row.thumb as any} />
                        </TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.publisher}</TableCell>
                        <TableCell>{row.stocks}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={`${PATH.PRODUCT}/${row._id }`}
                          >
                            DETAIL
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 5, 10, 15]}
            count={productList.length as number}
            rowsPerPage={rowsPerPage as number}
            page={page as number}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </MainLayout>
  )
}

// ActionsComponent?: React.ElementType<TablePaginationActionsProps>;
// backIconButtonText?: string;
// backIconButtonProps?: Partial<IconButtonProps>;
// count: number;
// labelDisplayedRows?: (paginationInfo: LabelDisplayedRowsArgs) => React.ReactNode;
// labelRowsPerPage?: React.ReactNode;
// nextIconButtonProps?: Partial<IconButtonProps>;
// nextIconButtonText?: string;
// onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
// onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
// page: number;
// rowsPerPage: number;
// rowsPerPageOptions?: Array<number | { value: number; label: string }>;
// SelectProps?: Partial<SelectProps>;

export default ProductList
