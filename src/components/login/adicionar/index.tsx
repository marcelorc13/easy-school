'use client'

import './adicionar.css'
import { useState, useEffect } from 'react';
import { IoPersonOutline, IoBusinessOutline, IoBookOutline } from "react-icons/io5";
import { EditarSchema, EditarUserType } from '@/utils/auth/validarForms';
import { AddProfileInfoWithGoogle } from '@/lib/firebase/db';

interface Props {

}

const AdicionarInformacoesClient: React.FC<Props> = ({ }) => {

    const [data, setData] = useState<EditarUserType>({
        nome: '',
        sobrenome: '',
        curso: '',
        instituicao: ''
    })

    const HandleChange = (e: any) => {
        const { name, value } = e.target
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e: any) => {
        e.preventDefault()
        EditarSchema.parse(data)
        console.log(data)
        AddProfileInfoWithGoogle(data)
    }

    return (
        <main>
            <form onSubmit={HandleSubmit} className="formLogin flex flex-col gap-4 px-4 md:px-16 py-12">
                <div className="flex flex-row justify-between gap-1">
                    <input onChange={HandleChange} type="text" placeholder='Nome' name="nome" id="nome" />
                    <label htmlFor="nome"><IoPersonOutline className='loginIcons text-quaternaria' /></label>
                    <input onChange={HandleChange} type="text" placeholder='Sobrenome' name="sobrenome" id="sobrenome" />
                </div>

                <div>
                    <label htmlFor="curso"><IoBookOutline className='loginIcons' /></label>
                    <input onChange={HandleChange} type="text" placeholder='Curso' name="curso" id="curso" />
                </div>

                <div>
                    <label htmlFor="instituicao"><IoBusinessOutline className='loginIcons' /></label>
                    <input onChange={HandleChange} type="text" placeholder='Instituição' name="instituicao" id="instituicao" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200">Adicionar</button>
                </div>
            </form>
        </main>
    );
};

export default AdicionarInformacoesClient;