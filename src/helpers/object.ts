export const flattenObject = (object: object, parents: string[]) =>
  Object.assign(
    {},
    ...Object.entries(object).map(([k, v]) =>
      v && typeof v === "object"
        ? flattenObject(v, [...parents, k])
        : { [[...parents, k].join(".")]: v }
    )
  )
