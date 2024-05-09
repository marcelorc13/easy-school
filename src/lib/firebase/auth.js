import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { AddProfileInfo } from "./db"
import { redirect } from "next/navigation";

export const HandleCreateUser = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.senha)
        .then(() => {
            console.log("Usuario criado com sucesso")
            console.log(auth.currentUser)
            AddProfileInfo(data)
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

    signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const user = res.user;

            console.log("Logado com sucesso")
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)

            window.alert("Erro ao fazer o Login com o Google")
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
        if (user) {
            console.log(user);
        }
        else {
            console.log("Sem usuário Logado")
        }
    })
}