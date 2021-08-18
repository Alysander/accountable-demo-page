/* eslint-disable jsx-a11y/anchor-is-valid */
import { Max, May, Sam, Sara } from "../exampleData/example_authors";
import { Milestone } from "./Milestone";

const MilestoneList = () => (

    <div className="dynamic-px base-container py-4 flex flex-col gap-4 h-full lg:order-1 lg:row-span-2 lg:h-max-content ">
        <h2>
            Milestones
        </h2>
        <Milestone author={Sara} title="Accountable has now raised $24m in seed funds! 😱" />
        <Milestone author={Max} title="Quit my job to work full time on my side project." />
        <Milestone author={Sam} title="Reached $2400 ARR, baby steps." />
        <Milestone author={May} title="Hired our first employee in our startup!!" />
        <a href="#" className="orange-link mt-4">
            View all milestones →
        </a>
    </div>
)

export { MilestoneList }