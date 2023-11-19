import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import { useState, useEffect} from 'react'

export const useAuthenticator = () => {
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //CLEAN UP
    //DEAL WITH MEMORY LEAK
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const checkIfIsCancelled = () => {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError("")

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false)

            return user;
            
        } catch (error) {
            console.log(error)
            console.log(typeof error.message)

            if (error.message.includes("Password")) {
                setError("A senha deve ter um mínimo de 6 caracteres")
            } else if (error.message.includes("email-already")) {
                setError("Este email já está sendo utilizado")
            } else {
                setError("Ocorreu um erro, por favor tente mais tarde.")
            };
        };    
    };
    
        useEffect(() => {
            return () => setCancelled(true)
        }, [])

    return {
        auth,
        createUser,
        loading,
        error
    };
};