import { IUser } from "../IUser";


interface IAvatarProps {
    author: IUser,
}

const Avatar = ({ author }: IAvatarProps) => (
    <img src={author.avatar} alt="Avatar" className="rounded-full" />
)

export { Avatar }