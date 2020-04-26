/**
 * @name 获取浏览器类型
 * @param {string} str
 */
export function Browser () {
  const userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  const isOpera = userAgent.indexOf('Opera') > -1 //判断是否Opera浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera //判断是否IE浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 //判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 //判断是否Safari浏览器
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 //判断Chrome浏览器

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 'IE7'
    } else if (fIEVersion == 8) {
      return 'IE8'
    } else if (fIEVersion == 9) {
      return 'IE9'
    } else if (fIEVersion == 10) {
      return 'IE10'
    } else if (fIEVersion == 11) {
      return 'IE11'
    } else {
      return '0'
    } //IE版本过低
    // return 'IE'
  }
  if (isOpera) {
    return 'Opera'
  }
  if (isEdge) {
    return 'Edge'
  }
  if (isFF) {
    return 'FF'
  }
  if (isSafari) {
    return 'Safari'
  }
  if (isChrome) {
    return 'Chrome'
  }
}