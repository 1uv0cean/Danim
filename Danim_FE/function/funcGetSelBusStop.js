import axios from 'axios';

export function funcGetSelBusStop({busNumber}) {
  function getBusStop() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/post/getSelBusStop', {
          busNumber: busNumber,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = getBusStop().then(response => {
    return response.body;
  });

  return result;
}