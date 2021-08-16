import { IUser } from "../IUser"
import { Avatar } from "./Avatar"


interface IMilestoneProps {
    author: IUser,
    title: string,
}

const Milestone = ({ author, title }: IMilestoneProps) => (
    <div className="flex gap-2">
        <Avatar user={author} />
        <p className="text-gray">
            {title}
        </p>
    </div>
);

export { Milestone };