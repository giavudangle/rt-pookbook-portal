import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core"
import TableSortLabel from "@material-ui/core/TableSortLabel"

import type { Padding as PaddingType } from "@material-ui/core"

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Title",
    canSort: true
  },
  {
    id: "image",
    numeric: true,
    disablePadding: false,
    label: "Image",
    canSort: false
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price (VND)",
    canSort: true
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
    canSort: false
  },
  {
    id: "author",
    numeric: true,
    disablePadding: false,
    label: "Author",
    canSort: false
  },
  {
    id: "publisher",
    numeric: true,
    disablePadding: false,
    label: "Publisher",
    canSort: false
  },
  {
    id: "stocks",
    numeric: true,
    disablePadding: false,
    label: "Stocks",
    canSort: true
  },
  {
    id: "view",
    numeric: true,
    disablePadding: false,
    label: "View",
    canSort: false
  },
  {
    id: "edit",
    numeric: true,
    disablePadding: false,
    label: "Edit",
    canSort: false
  },
  {
    id: "delete",
    numeric: true,
    disablePadding: false,
    label: "Delete",
    canSort: false
  }
]

interface IEnhancedTableHead {
  classes: any
  numSelected: number
  onRequestSort: Function
  onSelectAllClick: any
  order: string
  orderBy: string
  rowCount: number
}

type TPadding = "default" | "checkbox" | "none"
type TSortDirection = "asc" | "desc" | false
type TDirection = "asc" | "desc"

export const EnhancedTableHead: React.FC<IEnhancedTableHead> = props => {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells!.map(headCell => (
          <TableCell
            key={headCell.id}
            align="justify"
            padding={
              headCell!.disablePadding
                ? ("none" as TPadding)
                : ("default" as TPadding)
            }
            sortDirection={
              orderBy === headCell.id!
                ? (order as TSortDirection)
                : (false as TSortDirection)
            }
          >
            <TableSortLabel
              active={headCell.canSort ? true : false}
              direction={
                orderBy === headCell.id!
                  ? (order as TDirection)
                  : ("desc" as TDirection)
              }
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden!}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
