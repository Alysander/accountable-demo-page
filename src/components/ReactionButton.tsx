import { Button } from "./Button";

interface IReactionButton {
    reactionCount: number,
    className?: string,
}

//In the future return different text for the case when there are none
const ReactionButton = ({ reactionCount, className }: IReactionButton) => (
    <Button icon="Crest" caption={`${reactionCount} reactions`} className={className} />
)
export { ReactionButton }