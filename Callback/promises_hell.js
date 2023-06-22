function f1(a) {
    return new Promise((resolve, reject) => {
      if (a > 10) {
        resolve(a * 10);
      } else {
        reject('error 1');
      }
    });
  }
  
  function f2(a) {
    return new Promise((resolve, reject) => {
      if (a > 200) {
        resolve(a + 10);
      } else {
        reject('error 2');
      }
    });
  }
  
  function f3(a) {
    return new Promise((resolve, reject) => {
      if (a > 10) {
        resolve(a - 10);
      } else {
        reject('error 3');
      }
    });
  }
  
  function f4(a) {
    return new Promise((resolve, reject) => {
      if (a > 10) {
        console.log(a);
        resolve();
      } else {
        reject('error 4');
      }
    });
  }
  
  f1(50)
    .then((result) => f2(result))
    .then((result) => f3(result))
    .then((result) => f4(result))
    .catch((error) => console.log(error));
  