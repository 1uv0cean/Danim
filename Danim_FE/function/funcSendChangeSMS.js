import axios from 'axios';

export function funcPostSMS({chngUserPhone}) {
  function chkPostSMS() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/post/sms', {
          userPhone: chngUserPhone,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = chkPostSMS().then(response => {
    console.log(response);
    if (response.code === 200) {
      return response.certiNumber;
    } else {
      return false;
    }
  });

  return result;
}
