
/**
 * @name 判断是否全部为空格
 * @param {str}
 */
export function IsAllSpace (str: any) {
  if (str == '') return true
  const reg = '^[ ]+$'
  return new RegExp(reg).test(str)
}

/**
 * @name 去除字符串中首尾的空格
 * @param {str}
 */
export function TrimStrSpace (str: any) {
  str = str.replace(/^\s+/, '')
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1)
      break
    }
  }
  return str
}