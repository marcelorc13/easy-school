'use client'
import './editar.css'
import { useState, useEffect } from 'react';
import { IoAtSharp, IoLockClosedOutline, IoPersonOutline, IoBusinessOutline, IoBookOutline } from "react-icons/io5";
import { HandleActualUser } from '@/lib/firebase/auth';
import { EditProfileInfo, GetProfileInfo } from '@/lib/firebase/db';
import { DocumentData } from 'firebase/firestore';
import { EditarSchema, EditarUserType } from '@/utils/auth/validarForms';


interface Props {

}

const EditarPefilClient: React.FC<Props> = ({ }) => {

    const [uid, setUid] = useState<string>()
    const [data, setData] = useState<DocumentData | undefined>()
    const [userEditado, setUserEditado] = useState<EditarUserType>({
        nome: '',
        sobrenome: '',
        instituicao: '',
        curso: ''
    })

    useEffect(() => {
        const getUser = async () => {
            const user = await HandleActualUser()
            setUid(user.uid)
            const userData = await GetProfileInfo(user.uid)
            setData(userData)
            setUserEditado({
                nome: `${userData ? userData.nome : ''}`,
                sobrenome: `${userData ? userData.sobrenome : ''}`,
                instituicao: `${userData ? userData.instituicao : ''}`,
                curso: `${userData ? userData.curso : ''}`
            })
        }
        getUser()
    }, [])

    const HandleChange = (e: any) => {
        const { name, value } = e.target
        setUserEditado((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e: any) => {
        e.preventDefault()
        EditarSchema.parse(userEditado)
        EditProfileInfo(userEditado, uid)
        //console.log(userEditado)
    }

    return (
        <main>
            <form onSubmit={HandleSubmit} className="formLogin flex flex-col gap-4 px-4 md:px-16 py-12">
                <div className="flex flex-row justify-between gap-1">
                    <input onChange={HandleChange} type="text" placeholder={data ? data.nome : '...'} defaultValue={data ? data.nome : '...'} name="nome" id="nome" />
                    <label htmlFor="nome"><IoPersonOutline className='loginIcons text-quaternaria' /></label>
                    <input onChange={HandleChange} type="text" placeholder={data ? data.sobrenome : '...'} defaultValue={data ? data.sobrenome : '...'} name="sobrenome" id="sobrenome"  />
                </div>

                <div>
                    <label htmlFor="curso"><IoBookOutline className='loginIcons' /></label>
                    <input onChange={HandleChange} type="text" placeholder={data ? data.curso : '...'} defaultValue={data ? data.curso : '...'} name="curso" id="curso" />
                </div>

                <div>
                    <label htmlFor="instituicao"><IoBusinessOutline className='loginIcons' /></label>
                    <input onChange={HandleChange} type="text" placeholder={data ? data.instituicao : '...'} defaultValue={data ? data.instituicao : '...'} name="instituicao" id="instituicao" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200">Editar</button>
                </div>
            </form>
        </main>
    );
};

export default EditarPefilClient;