'use client'
import { useState, useEffect } from 'react';
import { HandleActualUser, HandleLogin, HandleLogout } from "@/lib/firebase/auth"


interface Props {
    
}

const HomeClient: React.FC<Props> = ({  }) => {

    HandleActualUser();
    
    return (
        <div className='flex flex-col'>
            <button onClick={HandleLogin}> Login </button>
            <button onClick={HandleLogout}> Logout </button>
        </div>
    );
};

export default HomeClient;