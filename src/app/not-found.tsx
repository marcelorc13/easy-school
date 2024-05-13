import Link from "next/link"

import { TbMoodSad } from "react-icons/tb";

const NotFound = () => {
    return (
        <main className="h-screen w-full flex flex-col items-center justify-center gap-1">
            <TbMoodSad className="text-4xl" />
            <p className="text-3xl">Nenhuma Página Encontrada!</p>
            <Link className="text-blue-700 text-2xl" href={'/'}>Voltar para a página inicial</Link>
        </main>
    )
}

export default NotFound