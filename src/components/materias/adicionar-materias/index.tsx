'use client'

import { AdicionarMateriaSchema, AdicionarMateriaType } from '@/utils/auth/validarForms';
import './adicionar.css'
import { useState, useEffect } from 'react';
import { CreateMateria } from '@/lib/firebase/db/materias';
import { useRouter } from 'next/navigation';
// import AdicionarAula from './adicionar-aula';

interface Props {

}

const AdicionarMaterias: React.FC<Props> = ({ }) => {

    const router = useRouter()

    const [materia, setMateria] = useState<AdicionarMateriaType>({
        nome: '',
        professor: '',
        modalidade: ''
    })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setMateria((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        AdicionarMateriaSchema.parse(materia)
        CreateMateria(materia)
        window.alert("Materia criada com sucesso")
        router.refresh()
    }

    return (
        <section className='bg-secundaria w-full flex flex-col items-center py-6 md:rounded-2xl md:shadow-xl'>
            <h1 className='text-2xl pb-4'>Adicionar Matéria: </h1>
            <form onSubmit={HandleSubmit} className='formAdicionar'>
                <div>
                    <label htmlFor="nome">Nome da Matéria: </label>
                    <input onChange={HandleChange} name='nome' id='nome' type="text" />
                </div>

                <div>
                    <label htmlFor="professor">Professor: </label>
                    <input onChange={HandleChange} name='professor' id='professor' type="text" />
                </div>

                <div>
                    <label htmlFor="modalidade">Modalidade: </label>
                    <select className='cursor-pointer' onChange={HandleChange} name="modalidade" id="modalidade" value={materia.modalidade}>
                        <option hidden disabled value=''>Presencial/Online</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <input className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200 cursor-pointer" type="submit" value="Adicionar" />
            </form>

            {/* <AdicionarAula materia={materia.nome} /> */}

        </section>
    );
};

export default AdicionarMaterias;