/**
 * @name 获取浏览器类型
 * @param {string} str
 */
function Browser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

  var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器

  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; //判断是否IE浏览器

  var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器

  var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器

  var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器

  var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);

    if (fIEVersion == 7) {
      return 'IE7';
    } else if (fIEVersion == 8) {
      return 'IE8';
    } else if (fIEVersion == 9) {
      return 'IE9';
    } else if (fIEVersion == 10) {
      return 'IE10';
    } else if (fIEVersion == 11) {
      return 'IE11';
    } else {
      return '0';
    } //IE版本过低
    // return 'IE'

  }

  if (isOpera) {
    return 'Opera';
  }

  if (isEdge) {
    return 'Edge';
  }

  if (isFF) {
    return 'FF';
  }

  if (isSafari) {
    return 'Safari';
  }

  if (isChrome) {
    return 'Chrome';
  }
}

/**
 * @name 获取URL参数
 * @param {str} 参数
 */
function UrlSearch() {
  var name, value;
  var str = location.href; // 取得整个地址栏

  var num = str.indexOf('?');
  str = str.substr(num + 1); // 取得所有参数 stringvar.substr(start [, length ]

  var arr = str.split('&'); // 各个参数放到数组里

  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=');

    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      this[name] = value;
    }
  }
}

/**
 * @name 数字格式化千分位
 * @param {string} n
 */
function ThousandNum(n) {
  var num = (n || 0).toString(),
      result = '';

  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return result;
}

/**
 * @name 判断是否全部为空格
 * @param {str}
 */
function IsAllSpace(str) {
  if (str == '') return true;
  var reg = '^[ ]+$';
  return new RegExp(reg).test(str);
}
/**
 * @name 去除字符串中首尾的空格
 * @param {str}
 */

function TrimStrSpace(str) {
  str = str.replace(/^\s+/, '');

  for (var i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }

  return str;
}

export { Browser, IsAllSpace, ThousandNum, TrimStrSpace, UrlSearch };
//# sourceMappingURL=index.esm.js.map
