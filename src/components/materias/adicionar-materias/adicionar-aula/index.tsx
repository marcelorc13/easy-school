'use client'

import '../adicionar.css'
import { useState, useEffect } from 'react';

interface Props {
    materia: string;
}

const AdicionarAula: React.FC<Props> = ({ materia }) => {
    return (
        <form className='formAdicionar'>
            <h1 className='text-center text-2xl'>Adicionar Aula: </h1>
            <div>
                <label htmlFor="dia">Dia da Semana</label><select name="dia" id="dia">
                </select>
            </div>

            <div>
                <label htmlFor="sala">Sala:</label><input id='sala' name='sala' type="text" />
            </div>

            <div className='hora !flex-row justify-between gap-2'>
                <div>
                    <label htmlFor="horarioInicial"></label>Inicio da Aula:<input name='horarioInicial' id='horarioInicial' type="time" />
                </div>
                <div>
                    <label htmlFor="horarioFinal">Termino da Aula:</label><input name='horarioFinal' id='horarioFinal' type="time" />
                </div>
            </div>
        </form>
    );
};

export default AdicionarAula;