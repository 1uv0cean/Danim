import axios from 'axios';

export function funcLogin({userPhone}) {
  function chkSignIn() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/login', {
          userPhone: userPhone,
        })
        .then(response => resolve(response.data));
    });
  }

  const user = chkSignIn().then(response => {
    if (response.result === 'success') {
      return true;
    } else {
      return false;
    }
  });

  return user;
}
