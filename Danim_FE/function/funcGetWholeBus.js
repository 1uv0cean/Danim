import axios from 'axios';

export function funcGetWholeBus() {
  function getWholeBusList() {
    return new Promise(function (resolve, reject) {
      axios
        .get('http://10.0.2.2:5000/api/getWholeBus')
        .then(response => resolve(response.data));
    });
  }

  const result = getWholeBusList().then(response => {
    console.log('RESBODY : ', response.body);
    return response.body;
  });

  return result;
}
