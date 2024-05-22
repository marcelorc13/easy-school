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

    // fazer uma requizição do banco de dados para ter as materias ja adicionadas

    const [materias, setMaterias] = useState([])
    // const [materias, setMaterias] = useState([
    //     "Fundamentos",
    //     "Arquitetura",
    //     "Ingles",
    //     "Matematicas"
    // ])

    const [aulas, setAula] = useState<Aulas[]>([])

    const HandleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = event.target;

        setAula((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(aulas)
    }

    return (
        <main>
            <Calendario />
        </main>
    );
};

export default HorarioClient;