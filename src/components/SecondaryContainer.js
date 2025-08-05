import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movie);

    return movies.nowPlayingMovies && (
        <div className="bg-black">

            <div className="-mt-28 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            </div>
            
        </div>
    )
}

export default SecondaryContainer;
