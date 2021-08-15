import { Article } from "./Article";
import { Mellisa } from "../exampleData/example_authors";


const ArticleList = () => (
    <div className="flex flex-col gap-4">
        <Article
            author={Mellisa}
            description={`I’ve always been a perfectionist,
                but lately i’ve been dabbling with the idea 
                of just releasing my product and iterating as I go.`}
            commentCount={11}
            reactionCount={24}
            timePosted="3h ago"
        />
    </div>
)

export { ArticleList }