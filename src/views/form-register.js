
const register = () => {
  const view = `
    <div class= "register">
    <img src="../images/logo.png" alt="logo" class="logo-adopt">
    <img src="../images/home.png" alt="home" class="home-adopt">
    <form id="signup-form" >
    <input type= "text" class="names" placeholder="Names">
    <input type= "text" class="last-names"  placeholder="Last names">
    <input type= "text" class="email"  placeholder="Email" id="signup-email">
    <input type= "Password" class="password"  placeholder="Password" id="signup-password">
    <button type="submit" id="button-initial" onclick="window.location.href='#/postAdoption'">Sing up</button>
    </form>
    <img src="../images/dog-adopt.png" alt="dog-adopt" class="dog-adopt">
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
export default register;

/* Función para registrarse */
export const añadirEventos = () => {
  const signupForm = document.querySelector('#signup-form');
  console.log(signupForm)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    console.log(signupEmail, signupPassword)


    //Funcione en el navegador
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(userCredential => {
        sendEmail();
        signupForm.reset();


        console.log('sign Up')

      })

  })
};

/* enviar email de verificación */

export const sendEmail = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification()
    .then(function () {
      console.log('El correo se envio');
    }, function (error) {
      console.log('error')
    })
}

