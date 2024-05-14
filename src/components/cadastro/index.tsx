'use client'

import "./cadastro.css"
import { useState, useEffect } from 'react';
import Link from "next/link";
import { HandleCreateUser } from "@/lib/firebase/auth"
import { IoAtSharp, IoLockClosedOutline, IoPersonOutline, IoBusinessOutline, IoBookOutline } from "react-icons/io5";
import { CadastroSchema, UserType } from "@/utils/validarCadastro";

const CadastroClient = () => {

    const [user, setUser] = useState<UserType>({
        nome: '',
        sobrenome: '',
        instituicao: '',
        curso: '',
        email: '',
        senha: ''
    })

    const HandleChange = (e: any) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e: any) => {
        e.preventDefault();

        CadastroSchema.parse(user)
        HandleCreateUser(user);
        console.log(user);
    }

    return (
        <main className='flex flex-col items-center pt-8 md:pt-0 md:justify-center w-full h-screen'>
            <div className="flex flex-col gap-2 items-center mb-4">
                <h1 className="text-3xl font-semibold">Cadastre-se</h1>
                <h2 className="text-sm font-medium">Facilite sua vida acadêmica!</h2>
            </div>
            <div className='flex flex-col gap-2 md:rounded-2xl bg-secundaria shadow-xl w-full md:px-4'>
                <form onSubmit={HandleSubmit} className="formLogin flex flex-col gap-4 px-4 md:px-20 py-10">
                    <div className="flex flex-row justify-between gap-1">
                        <input required onChange={HandleChange} type="text" placeholder='Nome' name="nome" id="nome" />
                        <label htmlFor="nome"><IoPersonOutline className='loginIcons text-quaternaria' /></label>
                        <input required onChange={HandleChange} type="text" placeholder='Sobrenome' name="sobrenome" id="sobrenome" />
                    </div>

                    <div>
                        <label htmlFor="curso"><IoBookOutline className='loginIcons' /></label>
                        <input required onChange={HandleChange} type="text" placeholder='Curso' name="curso" id="curso" />
                    </div>

                    <div>
                        <label htmlFor="instituicao"><IoBusinessOutline className='loginIcons' /></label>
                        <input required onChange={HandleChange} type="text" placeholder='Instituição' name="instituicao" id="instituicao" />
                    </div>

                    <div>
                        <label htmlFor="email"><IoAtSharp className='loginIcons' /></label>
                        <input required onChange={HandleChange} type="email" placeholder='Email' name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="senha"><IoLockClosedOutline className='loginIcons' /></label>
                        <input required onChange={HandleChange} type="password" placeholder='Senha' name="senha" id="senha" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200">Cadastre-se</button>
                    </div>

                    <div className="-mt-1">
                        <p>Ja possui uma conta? <Link className="text-terciaria" href={"/login"}>Login</Link> </p>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CadastroClient;