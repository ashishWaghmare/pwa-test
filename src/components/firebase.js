import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKoEgzlZaC0pR6x4IR2WfhbU_67-oECEQ",
    authDomain: "blossom-pune.firebaseapp.com",
    databaseURL: "https://blossom-pune.firebaseio.com",
    projectId: "blossom-pune",
    storageBucket: "blossom-pune.appspot.com",
    messagingSenderId: "35238172087"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
