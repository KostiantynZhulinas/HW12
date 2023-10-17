function summarize(num) {
    if (typeof num !== 'number') {
      num = 1;
    }
  
    return function (x) {
      if (typeof x !== 'number') {
        return num + 1;
      }
      return x + num;
    };
  }
  
  const addFive = summarize(5);
  console.log(addFive(3));
  console.log(addFive());
