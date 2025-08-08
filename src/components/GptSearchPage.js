import GptSearchBar from "./GptSearchBar";
import { BGImage} from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";

const GptSearchPage = () => {
    return(
        <div>

            <div className="absolute -z-10">
                <img src={BGImage} alt="bg-image"/>
            </div>
            
            <GptSearchBar/>
            <GptMovieSuggestion/>

        </div>
    )
}

export default GptSearchPage;
