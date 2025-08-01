import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview} = mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default MainContainer;

