import './prototype/prototype'
import * as readlineSync from 'readline-sync'

export const input = (s = ''): string => readlineSync.question(s)

export const rand = (n: number): number => Math.random() * n

export const randInt = (n: number): number => rand(n)._floor()

export const max = (...n: any[]): number => Math.max(...n._flat())

export const min = (...n: any[]): number => Math.min(...n._flat())

export const sum = (...n: any[]): number => n._flat().reduce((a, c) => a + c)

export const mean = (...n: any[]): number => {
  n._flat$()
  return sum(n) / n.length
}

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
        process.exit(1)
      }
  }
  return []
}
