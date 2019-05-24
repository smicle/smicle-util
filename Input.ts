import * as readlineSync from 'readline-sync'
export const input = (s = ''): string => readlineSync.question(s)
