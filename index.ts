import './prototype/prototype'

export const range = function(start: number, stop = 0, step = 1): number[] {
  switch (arguments.length) {
    case 1:
      return Array.from(Array(start), (_, i) => i)
    case 2:
      const n = -start + stop
      return Array.from(Array(n._minusOnlyZero()), _ => start++)
    case 3:
      if (step > 0) {
        const n = -start + stop
        return Array.from(Array(n._minusOnlyZero()), _ => start++).filter((_, i) => i % step == 0)
      } else if (step < 0) {
        const n = start + -stop
        return Array.from(Array(n._minusOnlyZero()), _ => start--).filter((_, i) => i % step == 0)
      } else {
        console.error(Error('range() arg 3 must not be zero'))
      }
  }
  return []
}

export const rand = (n: number): number => Math.random() * n
export const randInt = (n: number): number => rand(n)._floor()

export const print = (m: any): void => console.log(m)

export const plus = (a: number, b: number): number => a + b
export const minus = (a: number, b: number): number => a - b
export const multiple = (a: number, b: number): number => a * b
export const division = (a: number, b: number): number => a / b
export const remainder = (a: number, b: number): number => a % b
export const exponent = (a: number, b: number): number => a ** b

export const max = <T extends unknown[]>(...n: T): number => Math.max(...(n._flat() as number[]))
export const min = <T extends unknown[]>(...n: T): number => Math.min(...(n._flat() as number[]))
export const sum = <T extends unknown[]>(...n: T): number => (n._flat() as number[]).reduce(plus)
export const mean = <T extends unknown[]>(...n: T): number => {
  n._flat$()
  return sum(n) / n.length
}

export const isNumber = (v: unknown): v is number => typeof v === 'number'
export const isFinite = (v: unknown): v is number => Number.isFinite(v as number)
export const isStrFinite = (v: unknown): v is number | string =>
  RegExp(/^[-+]?[0-9]+(\.[0-9]+)?$/).test(v as string)

// export const toNumber = <T extends number | string>(v: T): T extends number ? number | string
