import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = () => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/1263256/videos?language=en-US");

        const json = await data.json();

        const trailers = json.results.filter((video) => video.type === "Trailer")

        const trailer = trailers.length ? trailers[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    },[]);
}

export default useMovieTrailer;
