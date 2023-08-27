type Equal<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2)
    ? true
    : false

type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
    ? Equal<U, First> extends true ? true : Includes<Rest, U>
    : false
