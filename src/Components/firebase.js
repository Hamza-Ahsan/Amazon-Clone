import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAOwWbhs_6Z29qMAlLw725T-Eu_EmJ6r0",
    authDomain: "social-authentication-0.firebaseapp.com",
    databaseURL: "https://social-authentication-0.firebaseio.com",
    projectId: "social-authentication-0",
    storageBucket: "social-authentication-0.appspot.com",
    messagingSenderId: "335351541372",
    appId: "1:335351541372:web:0662ea7133abc00b87e3f9",
    measurementId: "G-HV7HQ3CG4H"
});


const auth = firebase.auth();

export { auth };