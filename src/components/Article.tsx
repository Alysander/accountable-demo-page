import { IUser } from "../IUser"

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

    <article className="top-level-container">

    </article>
)

export { Article }