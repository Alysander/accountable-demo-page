import { IUser } from "../IUser"
import { Avatar } from "./Avatar"
import { CommentButton } from "./CommentButton"
import { ReactionButton } from "./ReactionButton"
import { ReportButton } from "./ReportButton"

interface IArticle {
    author: IUser,
    description: string,
    photo?: { path: string, alt: string },
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

    <article className="base-container py-3">
        <div className="dynamic-px flex justify-between mb-3">
            <div className="flex">
                <Avatar author={author} />
                <div className="flex flex-col ml-2">
                    <h3>
                        {author.full_name}
                    </h3>
                    <p className="text-gray">
                        {timePosted}
                    </p>
                </div>
            </div>
            <div>
                <ReportButton />
            </div>
        </div>
        {
            // go home eslint you're drunk. It's complaining about the variable named photo.
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            photo && <img src={photo.path} alt={photo?.alt} className="mb-3" />
        }
        <div className="dynamic-px">
            <p className="mb-3">
                {description}
            </p>
            <CommentButton commentCount={commentCount} className="mr-3" />
            <ReactionButton reactionCount={reactionCount} />
        </div>

    </article>
)

export { Article }