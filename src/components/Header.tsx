/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode, useState } from "react";

import hamburgerMenuPath from "../assets/hamburger_menu.svg"
import logoPath from "../assets/logo.svg"
import bellPath from "../assets/bell.svg"

import { Evans } from "../exampleData/example_authors";
import { Avatar } from "./Avatar";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="px-4 py-4 mb-8 bg-white md:px-8">
            <div className="flex justify-between top-level-max-width flex-wrap">

                <img src={logoPath} alt="Logo" />
                <button className="lg:hidden">
                    <img src={hamburgerMenuPath} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
                </button>
                {/* 1) Must overflow on small screens so set min-w to 100%
                    2) So that it doesn't permanently take up space on the screen, set it to 0px height when it's closed.
                    3) Scale up height when it's open and add on appropriate margin above it
                    4) Prevent it overflowing on md screens and closed state styling (extra margin, opacity, height)
                      */}
                <NavList className={" min-w-full " +
                    " lg:min-w-min lg:mt-unset lg:opacity-100 lg:h-auto lg:transition-none" +
                    " transform transition ease-in duration-200 origin-top " +
                    (
                        mobileMenuOpen ? "mt-4 opacity-100 h-auto"
                            : "opacity-0 h-0 ")} />
                <div className="hidden lg:block" >
                    <AccountLink />
                </div>
            </div>
        </header>
    )
}

const NavList = ({ className }: { className: string }) => (
    <nav className={className}>
        <ul className="flex flex-col gap-4 bg-white lg:flex-row text-lg text-gray">
            <ListLink>Feed</ListLink>
            <ListLink>Milestones</ListLink>
            <ListLink>Groups</ListLink>
            <div className="lg:hidden"><ListLink>{Evans.full_name} </ListLink></div>
        </ul>
    </nav >
)
const ListLink = ({ children }: { children: ReactNode }) => (
    <a href="#" className="hover:text-orange hover:underline">
        <li>{children}</li>
    </a>
)
const AccountLink = () => (
    <div className="flex">
        <button className="rounded-full border border-gray-lighter w-6 h-6 mx-3">
            <img src={bellPath} alt="Notifications" className="mx-auto" />
        </button>
        <a href="#" className="text-lg mr-1">
            <Avatar user={Evans} />
        </a>
        <a href="#" className="text-lg hover:underline">
            {Evans.full_name}
        </a>
    </div>
)
export { Header }