/* eslint-disable jsx-a11y/anchor-is-valid */
import { David, May, Sara } from "../exampleData/example_authors";
import { TrendingPost } from "./TrendingPost";

const TrendingPostList = () => (
    <div className="dynamic-px base-container py-4 flex flex-col gap-3">
        <h3 className="text-gray font-bold">
            🔥 Trending Posts
        </h3>
        <TrendingPost
            title="A list of websites to practice your skills."
            author={David}
            timePosted="6h ago"
        />
        <TrendingPost
            title="Migrating to Next.js has been the best move."
            author={May}
            timePosted="6h ago"
        />
        <TrendingPost
            title="Referral Marketing grew our project by 240%"
            author={Sara}
            timePosted="6h ago"
        />
        <a href="#" className="orange-link mt-2">
            View all milestones →
        </a>
    </div>
)
export { TrendingPostList }