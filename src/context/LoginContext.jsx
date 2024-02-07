import { createContext, useMemo, useRef, useState } from "react";
import {useNavigate} from "react-router-dom"
import { database } from "../FireBaseConfig";
import {signOut} from "firebase/auth";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export const LoginContext = createContext();

const LoginContextProvider = ({children})=> {

    const emailRef = useRef();
    const pswRef = useRef();
    const [action, setAction] = useState('Sign Up');
    const history = useNavigate();

    const signOutHandler = ()=> {
        signOut(database).then(value => {
            history('/')
        })
    };

    const signUpHandler = () => {
        setAction('Sign Up')
    };
    
    const loginHandler = () => {
        setAction('Log in')
    };
    
       const submitHandler = (e, type) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const psw = pswRef.current.value;
        
        if (action === 'Sign Up') { // Check the type
            createUserWithEmailAndPassword(database, email, psw).then(data => {
                console.log(type);
                console.log(data, 'authData');
                history("/home")
                })
                .catch(error => {
                    // Handle error
                    console.log(' invalid');
                 alert(error.code)
                });
        } 

        if (action === 'Log in') {
            signInWithEmailAndPassword(database, email, psw).then(data => {
                console.log(data, 'authData');
                console.log(type);
                history("/home")
                })
                .catch(error => {
                    // Handle erro
                    console.log('invalid credential');
                 alert(error.code)
                });
        }
       };

       const value = useMemo(() => ({
        emailRef,
        pswRef,
        action,
        signUpHandler,
        loginHandler,
        submitHandler,
        signOutHandler
       }))


return (
    <LoginContext.Provider value={{...value}}>
        {children}
    </LoginContext.Provider>
)

};

export default LoginContextProvider