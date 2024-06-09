import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
    const userLogado = request.cookies.get('user-logado')
    
    if (userLogado) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: ['/', '/horario', '/materias/:path*', '/notas', '/perfil/:path*', '/login/informacoes']
}