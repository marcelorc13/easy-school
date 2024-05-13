'use client'

import { AiOutlineLoading } from 'react-icons/ai'

const Loading = () => {
    return (
        <main className="h-screen w-full flex flex-col items-center justify-center gap-1">
            <AiOutlineLoading className='animate-spin text-4xl' />
        </main>
    )
}

export default Loading