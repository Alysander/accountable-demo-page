import { IUser } from "../IUser";

import avatar1 from "../assets/mellisa.svg";
import avatar2 from "../assets/david.svg";
import avatar3 from "../assets/evans.svg";
import avatar4 from "../assets/sara.svg";
import avatar5 from "../assets/guy.svg";
import avatar6 from "../assets/guy2.svg";

const Mellisa: IUser = {
    full_name: "Mellisa Bay",
    avatar: avatar1,
}

const David: IUser = {
    full_name: "David Rug",
    avatar: avatar2
}

const Evans: IUser = {
    full_name: "Evans Jerry",
    avatar: avatar3,
}
const Sara: IUser = {
    full_name: "Sara Jack",
    avatar: avatar4,
}
const May: IUser = {
    full_name: "May Day",
    avatar: avatar4,
}

//These names never show in the example
const Max: IUser = {
    full_name: "Max Power",
    avatar: avatar5,
}

const Sam: IUser = {
    full_name: "Sam Serious",
    avatar: avatar6,
}

export { Mellisa, David, Evans, Sara, Max, May, Sam };