import { IUser } from "../IUser";


interface IAvatarProps {
    user: IUser,
}

const Avatar = ({ user: author }: IAvatarProps) => (
    <img src={author.avatarPath} alt="Avatar" className="rounded-full" />
)

export { Avatar }