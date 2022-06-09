{
  // Union Types : OR

  //function: login => success , fall

  type Login = 'success' | 'fail';
  function login(login: Login) {
    console.log(login);
  }
}
