const firebase = require('firebase/app')

require('firebase/storage')
require('firebase/auth')
require('firebase/firestore')
require('firebase/functions')
// require('firebase/analytics')

const firebaseConfig = {
    apiKey: "AIzaSyClbZqmjt50YW4t2ACV12kqNsQMobMTDz8",
    authDomain: "giochaduongdo.firebaseapp.com",
    databaseURL: "https://giochaduongdo.firebaseio.com",
    projectId: "giochaduongdo",
    storageBucket: "giochaduongdo.appspot.com",
    messagingSenderId: "275774396449",
    appId: "1:275774396449:web:3608b6edff7f70cfbb2b60",
    measurementId: "G-51Z3L6TE2Z"
};

const defaultProject = firebase.initializeApp(firebaseConfig);

const auth = defaultProject.auth()
const firestore = defaultProject.firestore()
const storage = defaultProject.storage();

exports.firestore = firestore
exports.auth = auth
exports.storage = storage
exports.default = defaultProject