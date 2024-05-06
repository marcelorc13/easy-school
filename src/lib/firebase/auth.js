import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

export const HandleLogin = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const user = res.user;

            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorCode)
            console.log(errorMessage)
            console.log(email)
            console.log(credential)
        });
}

export const HandleLogout = () => {
    signOut(auth)
    .then(() => {
        console.log("Logout efetuado com sucesso")
    }).catch((error) => {
        console.log(error)
    }) 
}

export const HandleActualUser = () => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log(user);
        }
        else {
            console.log("Sem usuário Logado")
        }
    })
}