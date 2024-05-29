'use client'
import { DeleteMateria, GetMateria } from '@/lib/firebase/db';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DocumentData } from 'firebase/firestore';
import { IoArrowBackOutline } from "react-icons/io5";


interface Props {
    id: string;
}

const MateriaClient: React.FC<Props> = ({ id }) => {
    const [materia, setMateria] = useState<DocumentData | undefined>(undefined)

    useEffect(() => {
        const get = async () => {
            try {
                const m = await GetMateria(id)
                setMateria(m)
                //console.log(m)
            }
            catch (error) {
                console.log(error)
            }
        }
        get()
    }, [])

    return (
        <main>
            <Link href={'/materias'}><IoArrowBackOutline /></Link>
            {materia ?
                <section className='flex flex-col gap-2 items-center'>
                    <p>Materia: {materia.nome}</p>
                    <p>Professor: {materia.professor}</p>
                    <p>Modalidade: {materia.modalidade}</p>
                    <button onClick={() =>  DeleteMateria(id)}>Excluir Materia</button>
                    <Link href={`/materias/${id}/editar`}>Editar Materia</Link>
                </section>
                :
                null}
        </main>
    );
};

export default MateriaClient;