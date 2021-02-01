import React, { createContext, useCallback } from 'react';
import api from '../services/api';


interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    name: string;
    signIn(creadentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessios', {
            email,
            password,
        });

        console.log(response.data);
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'Heron', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};
