function chart(method) {
  let res = null;
  switch(method) {
    case 'GET':
      res = [20,40,60,100,50,33];
      break;
    default:
      res = [20,40,60,100,50,200];
  }
  return res;
}

module.exports = chart;