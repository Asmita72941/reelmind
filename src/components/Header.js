import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
    

    const handleSignOut = () => {
        signOut(auth).then(()=>{

        }).catch((error) => {
            
        })
    }

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return(
        <div className="absolute z-10 py-2 px-8 bg-gradient-to-b from-black w-screen flex justify-between">
            <img 
                className="w-44" 
                src={LOGO} 
                alt="Logo"/>

            {user && (
                <div className="flex p-2 text-white">

                {showGptSearch && <select className="bg-gray-900 p-2 m-2" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}

                <button className="py-2 px-4 my-2 mx-4 bg-purple-800 rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>

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

