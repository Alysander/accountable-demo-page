import bell from "../assets/bell.svg";
import flag from "../assets/flag.svg";
import crest from "../assets/crest.svg";
import speech_bubble from "../assets/speech_bubble.svg";

interface IButton {
    icon: "Flag" | "Speech bubble" | "Crest" | "Bell",
    className?: string,
    caption: string,
}

const iconPaths = {
    "Bell": bell,
    "Flag": flag,
    "Crest": crest,
    "Speech bubble": speech_bubble
}

const Button = ({ icon, caption, className }: IButton) => {

    const path: string = iconPaths[icon];

    return (
        <button className={`rounded border ${className} px-2 py-1 border-gray-light text-gray hover:bg-gray-lightest transition duration-500`}>
            <img src={path} alt={icon} className="inline-block mr-1" />
            <span className="font-large">
                {caption}
            </span>
        </button>
    )
}
export { Button }