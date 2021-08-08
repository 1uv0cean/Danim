import axios from 'axios';

export function funcGetWholeStop() {
  function getWholeStopList() {
    return new Promise(function (resolve, reject) {
      axios
        .get('http://10.0.2.2:5000/api/getWholeStop')
        .then(response => resolve(response.data));
    });
  }

  const result = getWholeStopList().then(response => {
    // console.log('RESBODY : ', response.body);
    return response.body;
  });

  return result;
}
