import hamburger from "../assets/HamburgerMenu.svg"
import logo from "../assets/Logo.svg"

const Header = () => (
    <header className="container mx-auto p-4 flex justify-between">
        <img src={logo} alt="Logo" />
        <img src={hamburger} alt="Menu" />
    </header>
)

export { Header }