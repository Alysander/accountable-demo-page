import hamburger from "../assets/HamburgerMenu.svg"
import logo from "../assets/Logo.svg"

const Header = () => (
    <header className="top-level-container py-4 mx-auto flex justify-between mb-8">
        <img src={logo} alt="Logo" />
        <img src={hamburger} alt="Menu" />
    </header>
)

export { Header }