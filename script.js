import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

// Obtener los elementos del DOM
const loginButton = document.getElementById('login-google');
const userInfoDiv = document.getElementById('user-info');
const userEmail = document.getElementById('user-email');
const logoutButton = document.getElementById('logout');

// Función para iniciar sesión con Google
loginButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        userEmail.textContent = `Bienvenido: ${user.displayName}`;
        userInfoDiv.classList.remove('hidden');
        loginButton.classList.add('hidden');
        
        // Redirigir a home.html después de iniciar sesión
        window.location.href = './App/home.html';  // Redirige a otra página
      })
      .catch((error) => {
        console.error('Error al iniciar sesión: ', error);
      });
  });

// Función para cerrar sesión
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      userInfoDiv.classList.add('hidden');
      loginButton.classList.remove('hidden');
    })
    .catch((error) => {
      console.error('Error al cerrar sesión: ', error);
    });
});
