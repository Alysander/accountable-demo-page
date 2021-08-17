import { IUser } from "../IUser";


interface IAvatarProps {
    user: IUser,
}

const Avatar = ({ user: author }: IAvatarProps) => (
    <img src={author.avatarPath} alt="Avatar" className="rounded-full w-6 h-6" />
)

export { Avatar }