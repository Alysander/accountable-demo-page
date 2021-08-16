import { IUser } from "../IUser";

interface TrendingPostProps {
    author: IUser,
    title: string,
    timePosted: string,
}

const TrendingPost = ({ author, title, timePosted }: TrendingPostProps) => (
    <>
        <h3>{title}</h3>
        <div className="flex justify-between text-gray">
            <div  >
                {author.full_name}
            </div>
            <div>
                {timePosted}
            </div>
        </div>
    </>
)

export { TrendingPost }