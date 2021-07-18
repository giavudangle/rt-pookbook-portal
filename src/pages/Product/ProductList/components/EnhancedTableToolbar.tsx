import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  InputBase,
  TextField,
  InputAdornment
} from "@material-ui/core"
import { lighten, makeStyles } from "@material-ui/core/styles"
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Search as SearchIcon
} from "@material-ui/icons"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { PATH } from "../../../../constants/paths"
import { INFO_PALETTE } from "../../../../utils/useCustomColor"

interface IEnhancedTableToolbar {
  numSelected: number
  titleToolbar: string
  handleSearch: (e: any) => void
  searchValue: string
  onRemove : any
}

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between"
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {},
  searchRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: INFO_PALETTE.LIGHT,
    borderWidth: 1
  },
  searchIcon: {},
  tooltipRoot: {
    display: "flex",
    flexDirection: "row"
  }
}))

export const EnhancedTableToolbar: React.FC<IEnhancedTableToolbar> = props => {
  const classes = useToolbarStyles()
  const { numSelected, titleToolbar, handleSearch, searchValue,onRemove } = props
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {titleToolbar}
        </Typography>
      )}

      <div
        style={numSelected > 0 ? { display: "none" } : {}}
        className={classes.searchRoot}
      >
        <Tooltip title="Filter Product">
          <IconButton aria-label="filter-list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <TextField
          value={searchValue}
          onChange={handleSearch}
          id="standard-search-product"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton 
          onClick={onRemove}
          aria-label="delete">
            <DeleteIcon  />
          </IconButton>
        </Tooltip>
      ) : (
        <div className={classes.tooltipRoot}>
          <Tooltip style={{ margin: 20 }} title="Create Product">
            <IconButton
              component={Link}
              to={`${PATH.PRODUCT}/create`}
              style={{ backgroundColor: INFO_PALETTE.MAIN, color: "#fff" }}
              aria-label="create-product"
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Toolbar>
  )
}
