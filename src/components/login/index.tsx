'use client'

import "./login.css"
import { useState, useEffect } from 'react';
import Link from "next/link";
import { HandleActualUser, HandleGoogleLogin } from "@/lib/firebase/auth"
import { IoAtSharp, IoLockClosedOutline, IoLogoGoogle } from "react-icons/io5";

interface UserType {
    email: string;
    senha: string;
}

const LoginClient = () => {

    const [user, setUser] = useState<UserType>({
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
    }

    return (
        <main className='flex flex-col items-center justify-center w-full h-screen'>
            <div className="flex flex-col gap-2 items-center mb-4">
                <h1 className="text-4xl font-semibold">Login</h1>
                <h2 className="text-sm font-medium">Seja bem-vindo novamente!</h2>
            </div>

            <div className='flex flex-col gap-4 rounded-2xl bg-secundaria shadow-xl px-4'>
                <div className='pt-10 flex justify-center'>
                    <button className="bg-primaria px-6 py-2 rounded-lg flex flex-row gap-1 items-center" onClick={HandleGoogleLogin}> <IoLogoGoogle />
                        Login com Google
                    </button>
                </div>

                <div className="text-center font-medium">
                    OU
                </div>

                <form onSubmit={HandleSubmit} className="formLogin flex flex-col gap-4 px-20 pb-10">
                    <div>
                        <label htmlFor="email"><IoAtSharp className='loginIcons' /></label>
                        <input onChange={HandleChange} type="email" placeholder='exemplo@email.com' name="email" id="email" />
                        <span></span>
                    </div>

                    <div>
                        <label htmlFor="senha"><IoLockClosedOutline className='loginIcons' /></label>
                        <input onChange={HandleChange} type="password" placeholder='senha1234' name="senha" id="senha" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-xl w-full bg-terciaria text-xl py-2 font-semibold shadow-xl hover:scale-95 animation duration-200">Login</button>
                    </div>

                    <div className="-mt-1">
                        <p>Ainda não possui uma conta? <Link className="text-terciaria" href={"/cadastro"}>Cadastre-se</Link> </p>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginClient;