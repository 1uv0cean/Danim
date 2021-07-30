import axios from 'axios';

export function funcGetBusstop() {
  function chkBusstop() {
    return new Promise(function (resolve, reject) {
      axios
        .get('http://10.0.2.2:5000/api/busstop')
        .then(response => resolve(response.data));
    });
  }

  const result = chkBusstop().then(response => {
    console.log(response);
  });

  return result;
}
