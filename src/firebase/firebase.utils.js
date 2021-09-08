import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import config from './firebase.config'

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, ...otherAttributes) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdOn = new Date();

        try{
            await userRef.set({displayName,email, createdOn, ...otherAttributes})
        } catch(error){
            console.log('error creating user: ', error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;