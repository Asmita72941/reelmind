import GptSearchBar from "./GptSearchBar";
import { BGImage} from "../utils/constants";

const GptSearchPage = () => {
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BGImage} alt="bg-image"/>
            </div>
            <GptSearchBar/>
        </div>
    )
}

export default GptSearchPage;
