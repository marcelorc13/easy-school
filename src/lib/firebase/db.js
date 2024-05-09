import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'

export const AddProfileInfo = async (user) => {
    try{
        await addDoc(collection(db, "Users"), {
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