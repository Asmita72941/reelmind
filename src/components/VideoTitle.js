const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from black">

            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{title}</h1>
            <p className="hidden md:hidden lg:inline-block w-1/4 text-lg py-6">{overview}</p>

            <div className="mt-4 md:mt-5 lg:mt-0">
                <button className="bg-white text-black py-0.5 md:py-2 lg:py-3 px-3 md:px-8 lg:px-14 text-lg md:text-lg lg:text-xl hover:bg-opacity-80 rounded-lg">Play</button>

                <button className="hidden md:hidden lg:inline-block bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg mx-3">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
