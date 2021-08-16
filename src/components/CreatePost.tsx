import { IUser } from "../IUser";
import { Avatar } from "./Avatar";
import photoIcon from "../assets/photos.svg"

interface ICreatePostProps {
    user: IUser
}
const CreatePost = ({ user }: ICreatePostProps) => (
    <div className="base-container dynamic-px py-3 flex">
        <Avatar user={user} />

        <div className="border overflow-hidden rounded ml-3 border-gray-light flex-grow flex items-center focus-within:border-black  ">

            <input type="text"
                placeholder="Share what you’ve been working on..."
                className="overflow-ellipsis flex-grow py-2 pl-4 text-gray outline-none "

            />
            <button className="pr-4" >
                <img src={photoIcon} alt="Upload" />
            </button>
        </div>

    </div>
)

export { CreatePost }