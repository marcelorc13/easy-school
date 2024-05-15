import { db } from './firebase'
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

export const AddProfileInfo = async (user, uid) => {
    try {
        await setDoc(doc(db, "users", uid), {
            nome: user.nome,
            sobrenome: user.sobrenome,
            curso: user.curso,
            instituicao: user.instituicao,
            email: user.email,
        })
        console.log("Informções enviadas com sucesso")
    } catch (error) {
        console.log(error)
    }
}

export const EditProfileInfo = async (user, uid) => {
    try {
        await updateDoc(doc(db, "users", uid), {
            nome: user.nome,
            sobrenome: user.sobrenome,
            curso: user.curso,
            instituicao: user.instituicao,
        })
        window.alert("Informções editadas com sucesso")
        window.location.replace('/perfil')
    } catch (error) {
        console.log(error)
    }
}

export const GetProfileInfo = async (uid) => {
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()
    
    return (data)
}
