import { db } from '../firebase'
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { HandleActualUser } from '../auth'

export const AddProfileInfo = async (data) => {
    try {
        const user = await HandleActualUser()
        await setDoc(doc(db, "users", user.uid), {
            nome: data.nome,
            sobrenome: data.sobrenome,
            curso: data.curso,
            instituicao: data.instituicao,
            email: data.email,
        })
        console.log("Informções enviadas com sucesso")
    } catch (error) {
        console.log(error)
    }
}

export const AddProfileInfoWithGoogle = async (data) => {
    try {
        const user = await HandleActualUser()
        await setDoc(doc(db, "users", user.uid), {
            nome: data.nome,
            sobrenome: data.sobrenome,
            curso: data.curso,
            instituicao: data.instituicao,
            email: user.email,
        })
            .then(() => {
                console.log("Informções enviadas com sucesso")
                window.location.replace('/')
            })
    } catch (error) {
        console.log(error)
    }
}

export const EditProfileInfo = async (data) => {
    try {
        const user = await HandleActualUser()
        await updateDoc(doc(db, "users", user.uid), {
            nome: data.nome,
            sobrenome: data.sobrenome,
            curso: data.curso,
            instituicao: data.instituicao,
        })
            .then(() => {
                window.alert("Informções editadas com sucesso")
                window.location.replace('/perfil')
            })
    } catch (error) {
        console.log(error)
    }
}

export const GetProfileInfo = async (uid) => {
    const user = await HandleActualUser()
    const docRef = doc(db, "users", `${uid ? uid : user.uid}`)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()

    return (data)
}
