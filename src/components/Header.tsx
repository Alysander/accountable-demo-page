/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode, useState } from "react";
import hamburgerMenuPath from "../assets/hamburger_menu.svg"
import logoPath from "../assets/logo.svg"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="px-4 py-4 mb-8 bg-white md:px-8">
            <div className="flex justify-between top-level-max-width flex-wrap">

                <img src={logoPath} alt="Logo" />
                <button className="md:hidden">
                    <img src={hamburgerMenuPath} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
                </button>
                {/* 1) Must overflow on small screens so set min-w to 100%
                    2) So that it doesn't permanently take up space on the screen, set it to 1px height when it's closed.
                    3) Scale up height when it's open and add on appropriate margin above it
                    4) Prevent it overflowing on md screens and closed state styling (extra margin, opacity, height)
                      */}
                <NavList className={" min-w-full " +
                    " md:min-w-min md:mt-unset md:opacity-100 lg:h-auto lg:transition-none" +
                    " transform transition ease-in duration-200 origin-top " +
                    (
                        mobileMenuOpen ? "mt-4 opacity-100 h-auto"
                            : "opacity-0 h-0 ")} />

            </div>
        </header>
    )
}

const NavList = ({ className }: { className: string }) => (
    <nav className={className}>
        <ul className="flex flex-col gap-2 bg-white md:flex-row text-lg text-gray">
            <ListLink>Feed</ListLink>
            <ListLink>Milestones</ListLink>
            <ListLink>Groups</ListLink>
        </ul>
    </nav >
)
const ListLink = ({ children }: { children: ReactNode }) => (
    <a href="#" className="hover:text-orange hover:underline">
        <li>{children}</li>
    </a>
)

export { Header }