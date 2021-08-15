import { Button } from "./Button"

interface ICommentButton {
    commentCount: number,
    className?: string,
}

//In the future return different text for the case when there are none
const CommentButton = ({ commentCount, className }: ICommentButton) => (
    <Button icon="Speech bubble" caption={`${commentCount} comments`} className={className} />
)

export { CommentButton }