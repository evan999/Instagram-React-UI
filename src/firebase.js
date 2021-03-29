import firebase from "firebase";
// import firebase from '@firebase/app';
// import "@firebase/database";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDmTwmg5X69aIijLNg3mwTD1aqD4-Fx85Y",
	authDomain: "instagram-clone-a8e09.firebaseapp.com",
	projectId: "instagram-clone-a8e09",
	storageBucket: "instagram-clone-a8e09.appspot.com",
	messagingSenderId: "86646939874",
	appId: "1:86646939874:web:73e56c5900a4826dadfebb",
	measurementId: "G-E84Q4R6H5L"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db;