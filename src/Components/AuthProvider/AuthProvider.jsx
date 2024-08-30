import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = async (emailOrPhone, password) => {
        setLoading(true)
        try {
            const data= await axios.post('http://localhost:5000/login', {
                email: emailOrPhone,
                phone: emailOrPhone,
                password,
            });
            console.log(data);
            if(data.status === 200){
                toast.success('Login successful')
             }
            const { token, user } = data.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setToken(token);
            setLoading(false);
            setUser(user);
            setError("")
        } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        setLoading(false);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));
        console.log(storedUser);
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(storedUser);
        }
        setLoading(false)
    }, []);

    const authInfo = {
        user,
        token,
        login,
        logout,
        error,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
