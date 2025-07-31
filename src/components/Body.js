import { Outlet,useNavigate} from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import Header from "./Header";

const Body = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const {uid, email, displayName,photoURL} = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                }));
                navigate("/browse");
            }
            else{
                dispatch(removeUser());
                navigate("/");
            }
        })
    },[])

    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Body;
