'use server'

import { cookies } from "next/headers";

const expiraEm = 7 * 24 * 60 * 60 * 1000

export const SetLoginCookies = (uid: string) => {
    cookies().set({
        name: 'user-logado',
        value: uid,
        httpOnly: true,
        secure: true,
        maxAge: expiraEm
    })
}

export const DeleteLoginCookies = () => {
    cookies().set({
        name: 'user-logado',
        value: '',
        maxAge: 0
    })
}