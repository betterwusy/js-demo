const currying = () => {
  let result = [];
  const add = (...args) => {
    result = result.concat(args);
    return add;
  }
  add.valueOf = add.toString = () => {
    return result.reduce((prev, curr) => prev + curr, 0)
  }
  return add;
}

var add = currying();
console.log(+add(1, 2));