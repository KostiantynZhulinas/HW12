function summarize(num) {
    if (num === undefined) {
      num = 1;
    }
  
    return function(addend) {
      return num + addend;
    };
  }
  
  const addFive = summarize(5);
  console.log(addFive(3));
  console.log(addFive(6));
  