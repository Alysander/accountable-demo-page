import { IUser } from "../IUser"
import { CommentButton } from "./CommentButton"
import { ReactionButton } from "./ReactionButton"
import { ReportButton } from "./ReportButton"

interface IArticle {
    author: IUser,
    description: string,
    photo?: string,
    commentCount: number,
    reactionCount: number,
    timePosted: string,
}

const Article = ({
    author,
    description,
    photo,
    commentCount,
    reactionCount,
    timePosted }: IArticle) => (

    <article className="top-level-container py-3">
        <div className="flex justify-between mb-3">
            <div className="flex">
                <img src={author.avatar} alt="Avatar" className="rounded-full" />
                <div className="flex flex-col ml-2">
                    <h2 className="font-bold">
                        {author.full_name}
                    </h2>
                    <p className="text-gray">
                        {timePosted}
                    </p>
                </div>
            </div>
            <div>
                <ReportButton />
            </div>
        </div>
        <p className="mb-3">
            {description}
        </p>
        <CommentButton commentCount={commentCount} className="mr-3" />
        <ReactionButton reactionCount={reactionCount} />
    </article>
)

export { Article }