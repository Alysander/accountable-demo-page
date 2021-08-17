import hamburgerPath from "../assets/HamburgerMenu.svg"
import logoPath from "../assets/Logo.svg"

const Header = () => (
    <header className="px-4 py-4 mb-8 bg-white md:px-8">
        <div className="flex justify-between top-level-max-width ">

            <img src={logoPath} alt="Logo" />
            <img src={hamburgerPath} alt="Menu" />
        </div>
    </header>
)

export { Header }