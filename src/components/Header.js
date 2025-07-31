import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(()=>{

        }).catch((error) => {
            
        })
    }

    return(
        <div className="absolute z-10 py-2 px-8 bg-gradient-to-b from-black w-screen flex justify-between">
            <img 
                className="w-44" 
                src={LOGO} 
                alt="Logo"/>

            {user && (<div className="text-white flex p-2">
                <img 
                    className="w-12 h-12 "
                    src={user.photoURL}
                    alt="user-icon"/>

                <button onClick={handleSignOut} className="font-bold">(Sign Out)</button>
            </div>)}
        </div>
    )
}

export default Header;

