'use client'

import Calendario from './calendario';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Props {

}

interface Aulas {
    materia: string;
    dia: string;
    horarioIncio: string;
    horarioFinal: string;
    sala: string;

}

const HorarioClient: React.FC<Props> = ({ }) => {

    //(exemplo) futuramente ira fazer uma requizição do banco de dados para ter as materias ja adicionadas
    const [materias, setMaterias] = useState([
        "Fundamentos",
        "Arquitetura",
        "Ingles",
        "Matematicas"
    ])

    const [aulas, setAula] = useState<Aulas[]>([])

    const HandleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;

        setAula((prev) => {
            return{ ...prev, [name]: value}
        })
    }

    const HandleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(aulas)
    }

    return (
        <main>
            <Calendario />
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h3 className='text-2xl font-semibold'>Adicionar Aula: </h3>

                <form className='text-lg flex flex-col gap-4' onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="materias">Matéria: </label>
                        {materias.length > 0 ? (<select required name="materias" id="materias" onChange={HandleChange}>
                            <option disabled>Insira a Matéria</option>
                            {materias.map((materia, index) => (
                                <option value={materia} key={index}>{materia}</option>
                            ))}
                        </select>) : (
                            <div className='flex gap-1'>
                                <p className='text-gray-400'>Você não possui matérias</p>
                                <Link className='text-blue-600' href={"/"}>Adicione novas materias</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="dia">Dia: </label>
                        <select required name="dia" id="dia" onChange={HandleChange}>
                            <option disabled>Insira o Dia da Semana</option>
                            <option value="segunda">Segunda-Feira</option>
                            <option value="terca">Terça-Feira</option>
                            <option value="quarta">Quarta-Feira</option>
                            <option value="quinta">Quinta-Feira </option>
                            <option value="sexta">Sexta-Feira </option>
                            <option value="sabado">Sabado</option>
                        </select>
                        </div>

                    <div>
                        <h4>Horario da Aula: </h4>
                        <label htmlFor="horaInicio">Incio da Aula: </label>
                        <input required type="time" name='horarioIncio' id='horaInicio' onChange={HandleChange} />
                        <label htmlFor="horaFinal">Final da Aula: </label>
                        <input required type="time" name='horarioFinal' id='horaFinal'  onChange={HandleChange} />
                    </div>

                    <div>
                        <label htmlFor="sala">Sala: </label>
                        <input required type="text" id='sala' name='sala'  onChange={HandleChange} />
                    </div>

                    <div>
                        <input type="submit" value="Adicionar" />
                    </div>
                </form>
            </div>
        </main>
    );
};

export default HorarioClient;