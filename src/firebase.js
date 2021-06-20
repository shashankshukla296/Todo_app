

import firebase from  "firebase";
const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBVG3AfLHfL24xKTXARbzzD4wzsAVq1OaI",
    authDomain: "todo-app-cp-a3baa.firebaseapp.com",
    projectId: "todo-app-cp-a3baa",
    storageBucket: "todo-app-cp-a3baa.appspot.com",
    messagingSenderId: "252229530169",
    appId: "1:252229530169:web:9479edb4ad9ff65446d3e8",
    measurementId: "G-9RX0RWCRZE"
 

});

const db = firebaseApp.firestore();
export default db;

