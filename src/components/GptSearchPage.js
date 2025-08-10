import GptSearchBar from "./GptSearchBar";
import { BGImage} from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";

const GptSearchPage = () => {
    return(
        <div className="relative min-h-screen">

            <div className="fixed inset-0 -z-10">
                <img className="h-full w-full object-cover" src={BGImage} alt="bg-image"/>
            </div>
            
            <GptSearchBar/>
            <GptMovieSuggestion/>

        </div>
    )
}

export default GptSearchPage;
