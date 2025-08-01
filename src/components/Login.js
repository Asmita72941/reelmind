import { BGImage } from "../utils/constants";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL : USER_AVATAR,
                }).then(() => {

                    const {uid, email, displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }));
                    
                }).catch((error) => {
                    setErrorMessage(error.code+"-"+error.message);
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            })
        }
        else{
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            })
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={BGImage} alt="bg-image"/>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-black text-white absolute z-10 w-3/12 p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80">
                <h1 
                    className="font-bold text-3xl py-4"
                    >{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input 
                    ref={name}
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-600"/>}

                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-600"/>

                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-600"/>

                <p className="text-red-500">{errorMessage}</p>

                <button 
                    className="p-4 my-6 bg-red-800 w-full rounded-lg"
                    onClick={handleButtonClick}
                    >{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <h1 className="cursor-pointer py-4" 
                    onClick={toggleSignInForm}
                    >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</h1>

            </form>
        </div>
    )
}

export default Login;
