import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    singOut,
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
}