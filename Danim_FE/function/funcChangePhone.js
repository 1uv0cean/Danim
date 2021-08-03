import axios from 'axios';

export function funcChangePhone({chngUserPhone}, {userPhone}) {
  function changeUserPhone() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/post/changePhone', {
          userPhone: userPhone,
          chngUserPhone: chngUserPhone,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = changeUserPhone().then(response => {
    if (response.result === '200') {
      return true;
    } else {
      return false;
    }
  });

  return result;
}
