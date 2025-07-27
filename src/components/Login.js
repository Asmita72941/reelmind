import { BGImage } from "../utils/constants";
import Header from "./Header";

const Login = () => {
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={BGImage} alt="bg-image"/>
            </div>
        </div>
    )
}

export default Login;
