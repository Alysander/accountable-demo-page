import hamburger from "../assets/HamburgerMenu.svg"
import logo from "../assets/Logo.svg"

const Header = () => (
    <header className="px-4 py-4 mb-8 bg-white md:px-8">
        <div className="flex justify-between top-level-max-width ">

            <img src={logo} alt="Logo" />
            <img src={hamburger} alt="Menu" />
        </div>
    </header>
)

export { Header }