

export function stableSort(array : any, comparator : Function) {
    const stabilizedThis = array.map((el: any, index : number) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }