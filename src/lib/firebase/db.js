import { HandleActualUser } from './auth'
import { db } from './firebase'
import { setDoc, doc, getDoc, getDocs, updateDoc, collection, query } from 'firebase/firestore'

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
        window.alert("Informções editadas com sucesso")
        window.location.replace('/perfil')
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
        materias.push(doc.data())
    })

    return materias
}
