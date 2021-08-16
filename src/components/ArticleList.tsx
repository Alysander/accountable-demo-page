import { Article } from "./Article";
import { David, Evans, Mellisa } from "../exampleData/example_authors";
import codewellAdvertisement from "../assets/codewellAdvertisement.png";
import { CreatePost } from "./CreatePost";
import { TrendingPostList } from "./TrendingPostList";
import { MilestoneList } from "./MilestoneList";
import { Livestream } from "./Livestream";

const ArticleList = () => (
    <div className="flex flex-col gap-4">
        <CreatePost user={Evans} />

        <Article
            author={Mellisa}
            description={`I’ve always been a perfectionist,
                but lately i’ve been dabbling with the idea
                of just releasing my product and iterating as I go.`}
            commentCount={11}
            reactionCount={24}
            timePosted="3h ago"
        />
        <Article
            author={David}
            description={` Just released a blog on how and where to practice 
             your frontend development skills. It’s a list of 7 websites.
            `}
            photo={
                {
                    path: codewellAdvertisement,
                    //TODO make a ml classifier to generate alt tags automatically
                    alt: "Codewell"
                }
            }
            commentCount={36}
            reactionCount={121}
            timePosted="6h ago"
        />
        <TrendingPostList />
        <MilestoneList />
        <Livestream />

    </div>
)

export { ArticleList }