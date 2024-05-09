'use client'
import { HandleActualUser } from '@/lib/firebase/auth';
import { useState, useEffect, createContext, ReactNode } from 'react';

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        HandleActualUser()
            .then((result) => {
                console.log(result)
                setIsLoggedIn(result)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [HandleActualUser])

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
