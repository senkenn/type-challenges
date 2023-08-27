type First<T extends (string | number | Object | undefined)[]> = T extends [] ? never : T[0]
