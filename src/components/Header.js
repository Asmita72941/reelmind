import { LOGO } from "../utils/constants";

const Header = () => {
    return(
        <div className="absolute z-10 py-2 px-8 bg-gradient-to-b from-black">
            <img 
                className="w-44" 
                src={LOGO} 
                alt="Logo"/>
        </div>
    )
}

export default Header;

