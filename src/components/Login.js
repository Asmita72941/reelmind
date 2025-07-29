import { BGImage } from "../utils/constants";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={BGImage} alt="bg-image"/>
            </div>

            <form className="bg-black text-white absolute z-10 w-3/12 p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80">
                <h1 
                    className="font-bold text-3xl py-4"
                    >{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-600"/>}

                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-600"/>

                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-600"/>

                <button 
                    className="p-4 my-6 bg-red-800 w-full rounded-lg"
                    >{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <h1 className="cursor-pointer py-4" 
                    onClick={toggleSignInForm}
                    >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</h1>

            </form>
        </div>
    )
}

export default Login;
