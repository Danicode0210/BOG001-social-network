const initialSession = () => {
  const view = `
<main>
  <header class="header">
    <img src=" ../images/logo.png" alt="logo" class="logo-adopt">
  </header>
  <section class='linea'> </section>
  <form id="formLogin">
    <input type="email" class="user-placeholder" id="loginEmail" placeholder="Email">
    <input type="text" class="password-placeholder" id="loginPassword" placeholder="Password">
    <button type="submit" id="buttonLogin">Login</button>
    <img src="../images/Ojitoabierto.png" id="verClave">
    <a href="#/formRegister" class="register">Register</a>
    <button type="button" id="Gmail">Sign up with Gmail</button>
  </form>
  <section class="items-login">
    <img src="../images/user.png" alt="user" class="user">
    <img src="../images/password.png" alt="password" class="password"></img>
  </section>
  <div class="dogs-home">
    <img src="../images/dogs-home.png" alt="dogs-home">
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export default initialSession;


/* Validación de formulario de entrada a la aplicación */

export const login = () => {
  const loginForm = document.querySelector('#formLogin');
  loginForm.addEventListener('submit', (e) => {
    console.log('intentando enviar')
    e.preventDefault();
    const loginEmail = document.querySelector('#loginEmail').value;
    const loginPassword = document.querySelector('#loginPassword').value;
    console.log(loginEmail, loginPassword)
    //Funcione en el navegador
    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(userCredential => {
        loginForm.reset();


        console.log('sign In')

      })


  })

};



/* Login con gmail */

export const gmail = () => {
  const gmailbutton = document.querySelector('#Gmail')
  gmailbutton.addEventListener('click', e => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        console.log('google sign in')
      })
      .catch(err => {
        console.log(err)
      })

  })
}

/* ver u ocultar contraseña*/


export const mostrarContraseña = () => {
  const verContraseña = document.getElementById("verClave");
  const inputContraseña = document.getElementById("loginPassword");
  verContraseña.addEventListener('click', mostrarContraseña);

  if (inputContraseña.type == 'text') {
    inputContraseña.type = 'password';
    /* inputContraseña.src = 'Ojitoabierto.png';
    */
  } else {
    inputContraseña.type = 'text';
    /* inputContraseña.src = "Ojitocerrado.png";
    */

  }
}