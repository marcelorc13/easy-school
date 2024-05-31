import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { AddProfileInfo, GetProfileInfo } from "./db/perfil"
import { DeleteLoginCookies, SetLoginCookies } from "@/utils/auth/CookiesDeLogin";

export const HandleCreateUser = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.senha)
        .then(() => {
            console.log("Usuario criado com sucesso")
            console.log(auth.currentUser)
            AddProfileInfo(data, auth.currentUser.uid)
                .then(() => {
                    window.location.replace('/login')
                })
        }).catch((error) => {
            console.log(error)
        })

}

export const HandleEmailLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.senha)
        .then((userCredential) => {
            console.log("Logado com sucesso")
            console.log(userCredential.user)
            SetLoginCookies(userCredential.user.uid)
                .then(() => {
                    window.location.replace('/')
                })

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

            SetLoginCookies(user.uid)
                .then(async () => {
                    const userInfo = await GetProfileInfo(user.uid)
                    if (userInfo == undefined) {
                        window.location.replace('/login/informacoes')
                    }
                    else {
                        window.location.replace('/')
                    }
                })

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
        .then(async () => {
            window.alert('Logout efetuado com sucesso')
            DeleteLoginCookies()
                .then(() => {
                    window.location.replace('/login')
                })

        }).catch((error) => {
            console.log(error)
        })
}

export const HandleActualUser = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log(user)
                resolve(user)
            }
            else {
                //console.log("Sem Usuario Logado")
                reject("Sem Usuario Logado")
            }
        })
    })
}
