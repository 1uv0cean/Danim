import axios from 'axios';

export function funcGetSelBus({stationNumber}) {
  function getBus() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/post/getSelBus', {
          busNumber: stationNumber,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = getBus().then(response => {
    return response.body;
  });

  return result;
}
