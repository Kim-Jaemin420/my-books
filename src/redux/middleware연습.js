function middleware1(store) {
  return (next) => {
    console.log('middleware1', 1);
    return (action) => {
      console.log('middleware1', 2);
      const returnValue = next(action);
      console.log('middleware1', 3);
      return returnValue;
    };
  };
}

function middleware2(store) {
  return (next) => {
    console.log('middleware2', 1);
    return (action) => {
      console.log('middleware2', 2);
      const returnValue = next(action);
      console.log('middleware2', 3);
      return returnValue;
    };
  };
}
