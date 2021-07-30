import axios from 'axios';

export function funcPostSMS({userPhone}) {
  function chkPostSMS() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/post/sms', {
          userPhone: userPhone,
        })
        .then(response => resolve(response.data));
    });
  }

  const user = chkPostSMS().then(response => {
    if (response.result === 'success') {
      return true;
    } else {
      return false;
    }
  });

  return user;
}
