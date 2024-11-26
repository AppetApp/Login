// Importa las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-Vf7mE-jjvkmMgt7ijPV7J43Z6Emm2M4",
    authDomain: "appet-7c4bb.firebaseapp.com",
    projectId: "appet-7c4bb",
    storageBucket: "appet-7c4bb.firebasestorage.app",
    messagingSenderId: "983279084865",
    appId: "1:983279084865:web:dbbb008f8e5674b850adc0",
    measurementId: "G-GGPQ3SE0DG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Obtener la instancia de auth

// Exportar auth para usarlo en otros archivos
export { auth };
