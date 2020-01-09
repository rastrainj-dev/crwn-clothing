import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDNAB7w9_ca28N_ZK-P6_uATCwzi1VKPK8',
    authDomain: 'crwn-db-59c3d.firebaseapp.com',
    databaseURL: 'https://crwn-db-59c3d.firebaseio.com',
    projectId: 'crwn-db-59c3d',
    storageBucket: 'crwn-db-59c3d.appspot.com',
    messagingSenderId: '924700879839',
    appId: '1:924700879839:web:a1b55809d1d5d45d84f26a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
