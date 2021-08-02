import axios from 'axios';

export function funcGetBusstop({latitude, longitude}) {
  function chkBusstop() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/busstop', {
          latitude: latitude,
          longitude: longitude,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = chkBusstop().then(response => {
    // console.log('RESPONSE : ', response.body);
    return response.body;
  });

  return result;
}
