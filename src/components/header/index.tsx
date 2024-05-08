'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLogOutOutline } from "react-icons/io5";
import { HandleLogout } from '@/lib/firebase/auth';

interface Props {
    Icone: React.ReactElement;
    tela: string;
}

const Header: React.FC<Props> = ({ Icone, tela }) => {

    useEffect(() => {
        
        const destacado = document.getElementById(tela);
        destacado?.classList.add("font-semibold");
    }, [tela])


    return (
        <header className='flex flex-row justify-between py-4 px-8 text-lg'>
            <div className='flex items-center justify-center'>
                {Icone}
            </div>

            <ul className='flex flex-row gap-4'>
                <li><Link id='home' href={"/"}> Home</Link></li>
                <li><Link id='horario' href={"/horario"}> Horário </Link></li>
                <li><Link id='materias' href={"/"}> Matérias </Link></li>
                <li><Link id='notas' href={"/"}> Notas </Link></li>
            </ul>

            <div className='flex flex-row gap-2 items-center'>
                <p>Perfil</p>
                <IoLogOutOutline className='cursor-pointer text-xl' onClick={HandleLogout} />
            </div>
        </header>
    );
};

export default Header;