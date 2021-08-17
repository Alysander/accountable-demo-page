import livestreamPreview from "../assets/livestreamPreview.jpg";
import eye from "../assets/eye.svg"

const Livestream = () => (
    <div className="base-container relative mt-2 md:mt-unset md:h-3/4 lg:h-full">
        <img src={livestreamPreview} alt="Livestream" className="md:object-cover lg:h-full" />

        <div className="absolute top-0 left-0 right-0 bottom-0 fade-overlay-bg p-1em flex flex-col justify-between text-white text-xs" >
            <div>
                <button className="livestream-button bg-red mr-0.66em ">
                    Live
                </button>
                <button className="livestream-button bg-gray-livestream">
                    <img src={eye} alt="viewers" className="inline-block" /> 2,132
                </button>
            </div>
            <h3 className="m-3 text-base">
                My journey from $0 MRR to $10,000 MRR
            </h3>
        </div>

    </div>
)

export { Livestream }