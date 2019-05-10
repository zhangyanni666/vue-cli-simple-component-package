/*
*
* JS基础工具类
* */
export let _undefined
export const BLANK_STRING = ''// 空字符串
export const NOOP = function () {}
export const EMPTY_ARRAY = []
export const EMPTY_OBJECT = {}
export const REG_BLANK = /^\s*$/// 验证空格tab
export const REG_CLASS_TYPE = /\[object\s(\w+)]/
export const hasOwnProperty = EMPTY_OBJECT.hasOwnProperty
export const objectToString = EMPTY_OBJECT.toString
export const getProto = Object.getPrototypeOf
export const fnToString = hasOwnProperty.toString
export const ObjectFunctionString = fnToString.call(Object)
export const slice = EMPTY_ARRAY.slice
export const inBrowser = typeof window !== 'undefined' // 是否在浏览器环境
export const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && (!!window.ActiveXObject || /msie|trident/.test(UA))// 是不是IE
export const isIE6 = isIE && !-[1] && !window.XMLHttpRequest
export const isIE8 = isIE && !!document.documentMode
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isIE7 = isIE && !isIE6 && !isIE8 && !isIE9
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isWebkit = UA && /webkit/.test(UA)
export const isFireFox = UA && /firefox/.test(UA)
export const isOpera = UA && /opr/.test(UA)
export const isSafari = UA && !isChrome && !isOpera && /safari/.test(UA)
export const assign = Object.assign
const call = Function.prototype.call
/**
 * 反柯里化函数
 * @param f
 * @return {Function}
 */
export const uncurry = function uncurryThis (f) {
  return function () {
    return call.apply(f, arguments)
  }
}
