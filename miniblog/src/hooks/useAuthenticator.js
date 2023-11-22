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

    //REGISTER
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

    //LOGOUT / SIGN OUT
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth);
    };

    //LOGIN / SIGN IN
 
    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            if (error.message.includes("invalid-login")) {
                setError("Email ou senha está incorreto")
            } 
            setLoading(false)
            console.log(error)
        }

    };
        useEffect(() => {
            return () => setCancelled(true)
        }, [])

    return {
        auth,
        createUser,
        loading,
        error,
        logout,
        login
    };
};