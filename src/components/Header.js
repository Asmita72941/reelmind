import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(()=>{

        }).catch((error) => {
            
        })
    }

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    return(
        <div className="absolute z-10 py-2 px-8 bg-gradient-to-b from-black w-screen flex justify-between">
            <img 
                className="w-44" 
                src={LOGO} 
                alt="Logo"/>

            {user && (<div className="flex p-2 text-white">

                <button className="py-2 px-4 my-2 mx-4 bg-purple-800 rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>

                <img 
                    className="w-12 h-12 "
                    src={user.photoURL}
                    alt="user-icon"/>

                <button onClick={handleSignOut} className="font-bold  ">(Sign Out)</button>
            </div>)}
        </div>
    )
}

export default Header;

