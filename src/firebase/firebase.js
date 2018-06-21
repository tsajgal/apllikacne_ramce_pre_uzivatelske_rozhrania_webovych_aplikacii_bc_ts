import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD8qVzs7nwPZuh5lQSmBnTjqo3vugEJBjY",
    authDomain: "ladmar-eb6b5.firebaseapp.com",
    databaseURL: "https://ladmar-eb6b5.firebaseio.com",
    projectId: "ladmar-eb6b5",
    storageBucket: "ladmar-eb6b5.appspot.com",
    messagingSenderId: "325384047199"
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,

};