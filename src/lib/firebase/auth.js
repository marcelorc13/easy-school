import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { redirect } from "next/navigation";

export const HandleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()

    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });

    signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const user = res.user;

            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
}

export const HandleLogout = () => {
    signOut(auth)
    .then(() => {
        window.alert('Logout efetuado com sucesso')
    }).catch((error) => {
        console.log(error)
    }) 
}

export const HandleActualUser = async () => {
     onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log(user);
        }
        else {
            console.log("Sem usuário Logado")
        }
    })
}