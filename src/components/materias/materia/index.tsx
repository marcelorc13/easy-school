'use client'
import { GetMateria } from '@/lib/firebase/db';
import { useState, useEffect } from 'react';
import { DocumentData } from 'firebase/firestore';

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
                console.log(m)
            }
            catch (error) {
                console.log(error)
            }
        }
        get()
    }, [])

    return (
        <main>
            {materia ?
                <section>
                    <p>Materia: {materia.nome}</p>
                    <p>Professor: {materia.professor}</p>
                    <p>Modalidade: {materia.modalidade}</p>
                </section>
                :
                null}
        </main>
    );
};

export default MateriaClient;