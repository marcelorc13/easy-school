'use client'
import { useState, useEffect, Suspense } from 'react';
import AdicionarMaterias from './adicionar-materias';
import { GetMaterias } from '@/lib/firebase/db/materias';
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import Link from 'next/link';

interface Props {

}

interface Materia {
    nome: string,
    professor: string,
    modalidade: string,
    id: string
}

const MateriasClient: React.FC<Props> = ({ }) => {

    const [encolhido, setEncolhido] = useState<boolean>(true)
    const [materias, setMaterias] = useState<Materia[]>([])

    const get = async () => {
        try {
            const m = await GetMaterias()
            setMaterias(m)
            console.log(m)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <main className='flex flex-col items-center gap-6 md:px-24 lg:px-52 xl:px-60'>
            {materias.length > 0 ?
                <section className='flex flex-col items-center gap-2'>
                    <h1 className='text-2xl'>Minhas matérias:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6'>
                        {materias.map((materia, index) => (
                            <Link href={`materias/${materia.id}`} id={materia.id} key={index} className='flex flex-col gap-1 py-2 px-4 rounded-2xl border border-quaternaria border-opacity-50 shadow-xl cursor-pointer hover:scale-105 transition duration-200'>
                                <p>Materia: {materia.nome}</p>
                                <p>Professor: {materia.professor}</p>
                                <p>Modalidade: {materia.modalidade}</p>
                            </Link>
                        ))}
                    </div>
                </section>
                :
                <section>
                    <h2 className='text-2xl'>Você ainda não possui matérias</h2>
                </section>
            }
            {encolhido ?
                <div className='flex flex-row justify-center gap-2'>
                    <label className='cursor-pointer' htmlFor="btnAbrir">Adicionar Matérias</label>
                    <button id='btnAbrir' name='btnAbrir' onClick={() => setEncolhido(false)}><IoArrowDownOutline /></button>
                </div>
                :
                <div className='flex flex-col items-center w-full gap-2'>
                    <div className='flex flex-row justify-center gap-2'>
                        <label className='cursor-pointer' htmlFor="btnFechar">Esconder</label>
                        <button id='btnFechar' name='btnFechar' onClick={() => setEncolhido(true)}><IoArrowUpOutline /></button>
                    </div>
                    <AdicionarMaterias />
                </div>
            }
        </main>
    );
};

export default MateriasClient;