'use client' // Error components must be Client Components

import { useEffect } from 'react'

const Error = ({ error, reset }: {error: Error & {digest?: string}, reset: () => void}) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className='flex flex-col items-center justify-center w-full h-screen'>
            <h2 className='text-xl'>Algo de errado!</h2>
            <button
                className='text-2xl'
                onClick={
                    () => reset()
                }
            >
                Tente Novamente
            </button>
        </main>
    )
}

export default Error