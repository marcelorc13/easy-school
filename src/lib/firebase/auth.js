import { object } from "zod";
import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

export const HandleCreateUser = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.senha)
    .then(() => {
        console.log("Usuario criado com sucesso")
        console.log(auth.currentUser)
    }).catch((error) => {
        console.log(error)
    })

}

export const HandleEmailLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.senha)
    .then((userCredential) => {
        console.log("Logado com sucesso")
        console.log(userCredential.user)
    }).catch((error) => {
        console.log(error.message)

    })
}

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