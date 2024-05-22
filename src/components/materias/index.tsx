'use client'
import { useState, useEffect } from 'react';
import AdicionarMaterias from './adicionar-materias';

interface Props {

}

const MateriasClient: React.FC<Props> = ({ }) => {

    const [materias, setMaterias] = useState([])

    return (
        <main className='flex flex-col items-center gap-6 md:px-24 lg:px-52 xl:px-60'>
            {materias.length > 0 ?
                <section>
                    <h1>Minhas matérias:</h1>
                    {/* materias.map ... */}
                </section>
                :
                <section>
                    <h2 className='text-2xl'>Você ainda não possui matérias</h2>
                </section>
            }
            <AdicionarMaterias />
        </main>
    );
};

export default MateriasClient;