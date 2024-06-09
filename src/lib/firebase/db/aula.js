import { db } from '../firebase'
import { setDoc, doc, getDoc, getDocs, updateDoc, collection, query, deleteDoc } from 'firebase/firestore'
import { HandleActualUser } from '../auth'

export const CreateAula = async (data, id) => {
    try {
        const user = await HandleActualUser()
        const docRef = collection(db, 'users', user.uid, 'materias', id, "aulas")

        setDoc(doc(docRef), {
            dia: data.dia,
            sala: data.sala,
            horarioInicial: data.horarioInicial,
            horarioFinal: data.horarioFinal
        })

        console.log('Materia registrada com sucesso')

    } catch (error) {
        console.log(error)
    }
}