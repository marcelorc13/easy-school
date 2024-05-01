'use client'

import React, { useState, useEffect } from 'react';
import { IconType } from "react-icons";
import Link from 'next/link';

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
                <li><Link id='horario' href={"/"}> Horário </Link></li>
                <li><Link id='materias' href={"/"}> Matérias </Link></li>
                <li><Link id='notas' href={"/"}> Notas </Link></li>
            </ul>

            <div>
                <p>Perfil</p>
            </div>
        </header>
    );
};

export default Header;