import axios from 'axios';

export function funcRegister({userName, userPhone, userCertify}) {
  // /api/register에 데이터 보내고 응답 받아오는 함수
  function chkSignUp() {
    return new Promise(function (resolve, reject) {
      axios
        .post('http://10.0.2.2:5000/api/register', {
          userName: userName,
          userPhone: userPhone,
          userCertify: userCertify
        })
        .then(response => resolve(response.data));
    });
  }

  const user = chkSignUp().then(response => {
    console.log('RESPONSE : ', response);
    if (response.result === 'success') {
      return true;
    } else {
      return false;
    }
    // return response.userID;
  });

  return user;
  
}