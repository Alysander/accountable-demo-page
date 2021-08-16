import { IUser } from "../IUser";


interface IAvatarProps {
    user: IUser,
}

const Avatar = ({ user: author }: IAvatarProps) => (
    <img src={author.avatar} alt="Avatar" className="rounded-full" />
)

export { Avatar }