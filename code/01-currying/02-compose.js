/**
 * 构建一个组合函数，函数接受任意函数为参数，
 * 每个函数只能接受一个参数，最后组合函数也返回一个函数
 * 如 c(b(a(1))) => compose(c, b, a)(1)
 */
const a = (x) => x + 1
const b = (x) => x * 2
const c = (x) => x - 1
function compose(...funcs) {
  return function (x) {
    if (funcs.length === 0) return x;
    if (funcs.length === 1) return funcs[0](x);
    return funcs.reduceRight((res, func) => {
      return func(res)
    }, x)
  }
}

const res = compose(c, b, a, a)(1)
console.log(res);
