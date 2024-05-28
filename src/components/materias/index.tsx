'use client'
import { useState, useEffect } from 'react';
import AdicionarMaterias from './adicionar-materias';
import { GetMaterias } from '@/lib/firebase/db';
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

interface Props {

}

interface Materia {
    nome: string,
    professor: string,
    modalidade: string
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
                            <div key={index} className='flex flex-col gap-1 py-2 px-4 rounded-2xl border border-quaternaria border-opacity-50'>
                                <p>Materia: {materia.nome}</p>
                                <p>Professor: {materia.professor}</p>
                                <p>Modalidade: {materia.modalidade}</p>
                            </div>
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
                        <label className='cursor-pointer' htmlFor="btnFechar">Fechar</label>
                        <button id='btnFechar' name='btnFechar' onClick={() => setEncolhido(true)}><IoArrowUpOutline /></button>
                    </div>
                    <AdicionarMaterias />
                </div>
            }
        </main>
    );
};

export default MateriasClient;