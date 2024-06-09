'use client'

import './editar.css'
import { EditMateria } from '@/lib/firebase/db/materias';
import { AdicionarMateriaSchema, AdicionarMateriaType } from '@/utils/auth/validarForms';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Props {

}

const EditarMateriaClient: React.FC<Props> = ({ }) => {

    const pathName = usePathname()
    const pathSegments = pathName.split('/');
    const id = pathSegments[2]

    //console.log(id)

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
        EditMateria(id, materia)
                        .then(() => {
                            window.alert("Materia Editada com sucesso")
                            router.push('/materias')
                        }).catch((error) => {
                            console.log(error)
                        })

    }

    return (
        <main>
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
        </main>
    );
};

export default EditarMateriaClient;