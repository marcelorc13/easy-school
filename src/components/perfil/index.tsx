'use client'
import './perfil.css';
import { useState, useEffect } from 'react';
import { GetProfileInfo } from '@/lib/firebase/db';
import { DocumentData } from 'firebase/firestore';
import { IoAtSharp, IoPersonOutline, IoBusinessOutline, IoBookOutline, IoPersonCircleOutline } from "react-icons/io5";
import Link from 'next/link';

interface Props {

}

const PerfilClient: React.FC<Props> = ({ }) => {

    const [data, setData] = useState<DocumentData | undefined>()

    useEffect(() => {
        const getUser = async () => {
            const userData = await GetProfileInfo()
            setData(userData)
            //console.log(userData)
        }
        getUser()
    }, [])

    return (
        <main className='md:mx-4 px-8 md:py-6 md:rounded-2xl md:shadow-xl md:bg-secundaria flex flex-col gap-2 md:text-xl'>
            <div className='flex items-center justify-center text-8xl mdtext-9xl'>
                <IoPersonCircleOutline />
            </div>
            <div className='flex flex-row justify-center'>
                <h1 className='text-xl md:text-3xl font-semibold'>Perfil</h1>
            </div>

            {data ? (
                <div className='flex flex-col items-center gap-4'>
                    <ul className='listaPerfil flex flex-col'>
                        <li className=' border-t border-b border-t-secundaria border-b-secundaria'><IoPersonOutline /> {data.nome} {data.sobrenome}</li>
                        <li className=' border-b border-b-secundaria'><IoAtSharp />{data.email}</li>
                        <li><IoBookOutline />{data.curso}</li>
                        <li className=' border-t border-b border-t-secundaria border-b-secundaria'><IoBusinessOutline />{data.instituicao}</li>
                    </ul>
                    <Link href={'/perfil/editar'} className='bg-terciaria rounded-lg px-2 py-1 cursor-pointer'>Editar Perfil</Link>
                </div>
            )
                : null}
        </main>
    );
};

export default PerfilClient;