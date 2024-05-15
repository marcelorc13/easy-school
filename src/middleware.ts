import { NextRequest, NextResponse } from "next/server"
import { GetServerSideProps } from "next"
import { cookies } from "next/headers"

export const middleware = (request: NextRequest) => {

    const userLogado = cookies().get('user-logado')

    if (userLogado) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: ['/', '/horario', '/materias', '/notas', '/perfil']
}