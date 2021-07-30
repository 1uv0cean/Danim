import axios from 'axios';

export function funcCheckDuplicate({userPhone}) {
  function chkDuplicate() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/chkDuplicate', {
          userPhone: userPhone,
        })
        .then(response => resolve(response.data));
    });
  }

  const result = chkDuplicate().then(response => {
    if (response.result === 'success') {
      // 중복되는 휴대폰이 아닐 때
      return true;
    } else {
      // 중복되는 휴대폰 번호일 때
      return false;
    }
  });
  return result;
}
