'use client'

import './adicionar.css'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CreateAula } from '@/lib/firebase/db/aula';
import { AdicionarAulaSchema, AdicionarAulaType } from '@/utils/auth/validarForms';
import { useRouter } from 'next/navigation';

interface Props {

}

const AdicionarAulaClient: React.FC<Props> = ({ }) => {

    const router = useRouter()

    const pathName = usePathname()
    const pathSegments = pathName.split('/');
    const id = pathSegments[2]

    const [aula, setAula] = useState<AdicionarAulaType>({
        dia: '',
        sala: '',
        horarioInicial: '',
        horarioFinal: ''
    })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setAula((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        AdicionarAulaSchema.parse(aula)
        console.log(aula)
        CreateAula(aula, id)
        window.alert("Aula adicionada com sucesso")
        router.push(`/materias/${id}`)
    }

    return (
        <main>
            <form onSubmit={HandleSubmit} className='formAdicionar'>
                <h1 className='text-center text-2xl'>Adicionar Aula: </h1>
                <div>
                    <label htmlFor="dia">Dia da Semana</label>
                    <select onChange={HandleChange} name="dia" id="dia" value={aula.dia}>
                        <option hidden disabled value=''>Dia da Semana</option>
                        <option value="Segunda-feira">Segunda-feira</option>
                        <option value="Terça-feira">Terça-feira</option>
                        <option value="Quarta-feira">Quarta-feira</option>
                        <option value="Quinta-feira">Quinta-feira</option>
                        <option value="Sexta-feira">Sexta-feira</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sala">Sala:</label>
                    <input onChange={HandleChange} id='sala' name='sala' type="text" />
                </div>

                <div className='hora !flex-row justify-between gap-2'>
                    <div>
                        <label htmlFor="horarioInicial">Inicio da Aula:</label>
                        <input onChange={HandleChange} name='horarioInicial' id='horarioInicial' type="time" />
                    </div>
                    <div>
                        <label htmlFor="horarioFinal">Termino da Aula:</label>
                        <input onChange={HandleChange} name='horarioFinal' id='horarioFinal' type="time" />
                    </div>
                </div>

                <input className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200 cursor-pointer" type="submit" value="Adicionar Aula" />
            </form>
        </main>
    );
};

export default AdicionarAulaClient;