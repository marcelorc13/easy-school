import { db } from '../firebase'
import { setDoc, doc, getDoc, getDocs, updateDoc, collection, query, deleteDoc } from 'firebase/firestore'
import { HandleActualUser } from '../auth'

export const CreateMateria = async (data) => {
    try {
        const user = await HandleActualUser()
        const docRef = collection(db, 'users', user.uid, 'materias')

        setDoc(doc(docRef), {
            nome: data.nome,
            professor: data.professor,
            modalidade: data.modalidade
        })

        console.log('Materia registrada com sucesso')

    } catch (error) {
        console.log(error)
    }
}

export const GetMaterias = async () => {
    const user = await HandleActualUser()
    const docRef = collection(db, 'users', user.uid, 'materias')
    const q = query(docRef)
    const queryRef = await getDocs(q)
    const materias = []
    queryRef.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        materias.push(data)
    })

    return materias
}

export const GetMateria = async (id) => {
    const user = await HandleActualUser()
    const docRef = doc(db, 'users', user.uid, 'materias', id)
    const docData = await getDoc(docRef)
    const data = docData.data()
    //console.log(docData.data())

    return data
}

export const DeleteMateria = async (id) => {
    const user = await HandleActualUser()
    const docRef = doc(db, 'users', user.uid, 'materias', id)
    await deleteDoc(docRef)
        .then(() => {
            window.alert('Materia Excluída com Sucesso')
            window.location.replace('/materias')
        }).catch((error) => {
            console.log(error)
        })
}

export const EditMateria = async (id, data) => {
    try {
        const user = await HandleActualUser()
        const docRef = doc(db, 'users', user.uid, 'materias', id)

        await updateDoc(docRef, {
            nome: data.nome,
            professor: data.professor,
            modalidade: data.modalidade
        })

        console.log('Materia Editada com sucesso')

    } catch (error) {
        console.log(error)
    }
}
