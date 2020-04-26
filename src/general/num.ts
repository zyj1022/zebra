/**
 * @name 数字格式化千分位
 * @param {string} n
 */
export function ThousandNum (n: string) {
  let num = (n || 0).toString(),
    result = ''
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}