'use client'

import './header.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLogOutOutline, IoReorderThreeSharp, IoClose } from "react-icons/io5";
import { HandleLogout } from '@/lib/firebase/auth';

interface Props {
    Icone: React.ReactElement;
    tela: string;
}

const Header: React.FC<Props> = ({ Icone, tela }) => {
    const [icone, setIcone] = useState<React.ReactElement>(<IoReorderThreeSharp />)
    const [encolhido, setEncolhido] = useState<boolean>(false)
    const [destaque, setDestaque] = useState<string | null>()

    const HandleList = () => {
        setEncolhido(encolhido ? false : true)
        setIcone(encolhido ? <IoClose /> : <IoReorderThreeSharp />)
        console.log(destaque)
    }

    useEffect(() => {
        setDestaque(tela)

        if (window.innerWidth > 768) {
            setEncolhido(false)
        } else {
            setEncolhido(true)
        }
    }, [tela])



    return (
        <header className={`flex flex-col items-center ${!encolhido ? 'h-screen' : 'h-auto'} md:h-auto md:flex-row justify-between pb-12 py-10 md:py-4 px-8 text-2xl md:text-xl`}>
            <div className='flex items-center justify-between w-full md:w-auto md:justify-center'>
                {encolhido ? Icone : <span className='text-base'>Menu</span>}
                <button className={`md:hidden text-2xl transform transition-transform ${encolhido ? 'rotate-0' : 'rotate-180'}`} onClick={HandleList}> {icone}  </button>
            </div>

            {!encolhido ? (
                <>
                    <ul className='flex flex-col items-center md:flex-row gap-4 md:gap-4'>
                        <li><Link className={destaque === 'home' ? 'destacado' : ''} href={"/"}> Home </Link></li>
                        <li><Link className={destaque === 'horario' ? 'destacado' : ''} href={"/horario"}> Horário </Link></li>
                        <li><Link className={destaque === 'materias' ? 'destacado' : ''} href={"/"}> Matérias </Link></li>
                        <li><Link className={destaque === 'notas' ? 'destacado' : ''} href={"/"}> Notas </Link></li>
                    </ul>

                    <div className='flex flex-col md:flex-row md:gap-2 items-center text-lg md:text-xl'>
                        <p><Link href={'/'}>Perfil</Link></p>
                        <div className='flex items-center gap-1 md:gap-0'><p className='md:hidden'>Logout</p> <IoLogOutOutline className='cursor-pointer text-2xl' onClick={HandleLogout} /></div>
                    </div>
                </>

            )
                : null
            }
        </header>
    );
};

export default Header;