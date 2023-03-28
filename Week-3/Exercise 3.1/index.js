function memoize(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const result = func(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function add(a = 0, b = 0) {
    return a + b
  }
  
  const memoizeAdd = memoize(add);
  
  console.time()
  console.log(memoizeAdd(100, 100));//returns 200
  console.timeEnd()
  console.time()
  console.log(memoizeAdd(100));//returns 100
  console.timeEnd()
  console.time()
  console.log(memoizeAdd(100, 200))//returns 300
  console.timeEnd()
  console.time()
  console.log(memoizeAdd(100, 100))//returns 200 without computing
  console.timeEnd()