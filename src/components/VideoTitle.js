const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from black">

            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="w-1/4 text-lg py-6">{overview}</p>

            <div>
                <button className="bg-white text-black p-3 px-14 text-xl hover:bg-opacity-80 rounded-lg">Play</button>

                <button className="bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg mx-3">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
