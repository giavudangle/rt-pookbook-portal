import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import { ERROR_PALETTE, INFO_PALETTE } from "../../utils/useCustomColor"

interface ICustomDialog {
  open: boolean
  transComp: React.ComponentType<
    TransitionProps & { children?: React.ReactElement<any, any> }
  >
  keepMounted: boolean
  onClose: () => void
  onResolve: any
  onReject: () => void
  labelledBy: string
  describedBy: string
  titleId: string
  contentId: string
  dialogTitle: string
  dialogContent: string
  btnResolveName: string
  btnRejectName: string
}

const CustomDialog: React.FC<ICustomDialog> = ({
  open,
  transComp,
  keepMounted,
  onClose,
  labelledBy,
  describedBy,
  titleId,
  contentId,
  dialogTitle,
  dialogContent,
  onReject,
  onResolve,
  btnResolveName,
  btnRejectName,
  ...res
}) => {
  return (
    <Dialog
      style={{ backgroundColor: INFO_PALETTE.LIGHT }}
      open={open}
      TransitionComponent={transComp}
      keepMounted={keepMounted}
      onClose={onClose}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
    >
      <DialogTitle id={titleId}>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id={contentId}>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onResolve}
          style={{ backgroundColor: ERROR_PALETTE.MAIN, color: "#fff" }}
        >
          {btnResolveName}
        </Button>
        <Button
          onClick={onReject}
          style={{ backgroundColor: INFO_PALETTE.MAIN, color: "#fff" }}
        >
          {btnRejectName}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
