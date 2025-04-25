export function repeat<T>(count: number, callback: (index: number) => T): T[] {
  return new Array(count).fill(null).map((_value, index) => callback(index))
}