
/**
 * @name 获取浏览器类型
 * @param {string} str
 */
export declare function Browser(): "Opera" | "Edge" | "Safari" | "Chrome" | "IE7" | "IE8" | "IE9" | "IE10" | "IE11" | "0" | "FF" | undefined;

/**
 * @name 判断是否全部为空格
 * @param {str}
 */
export declare function IsAllSpace(str: any): boolean;

/**
 * @name 数字格式化千分位
 * @param {string} n
 */
export declare function ThousandNum(n: string): string;

/**
 * @name 去除字符串中首尾的空格
 * @param {str}
 */
export declare function TrimStrSpace(str: any): any;

/**
 * @name 获取URL参数
 * @param {str} 参数
 */
export declare function UrlSearch(this: any): void;

export { }
