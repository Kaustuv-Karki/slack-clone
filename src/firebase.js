import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD85A9kra6fTTiU2hOYOaYZ1oSDIftn4yw",
    authDomain: "slack-clone-ca924.firebaseapp.com",
    databaseURL: "https://slack-clone-ca924.firebaseio.com",
    projectId: "slack-clone-ca924",
    storageBucket: "slack-clone-ca924.appspot.com",
    messagingSenderId: "287190518903",
    appId: "1:287190518903:web:1b16249a9c2949b088ca72",
    measurementId: "G-RV5GLV5SRQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;