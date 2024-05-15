'use client'
import { HandleActualUser } from '@/lib/firebase/auth';
import { useState, useEffect, createContext, ReactNode } from 'react';

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [actualUser, setActualUser] = useState<object>()

    useEffect(() => {
        HandleActualUser()
            .then((result) => {
                setActualUser(result)
            }).catch((error) => {
                setActualUser(error)
            })
    }, [])

    return (
        <AuthContext.Provider value={{ actualUser }}>
            {children}
        </AuthContext.Provider>
    );
};
