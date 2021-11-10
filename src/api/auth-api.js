import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export async function signUpUser({ name, email, password }) {
    try {
        const { user } = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        return { user }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export async function loginUser({ email, password }) {
    try {
        const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
        return { user }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export async function sendInstruction(email) {
    try {
        await firebase.auth().sendPasswordResetEmail(email)
        return {}
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export function logoutUser() {
    firebase.auth().signOut()
}