import MobileNav from "./MobileNav"
import Navbar from "./Navbar"
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            {/* desktop navbar  */}
            <Navbar />

            <div className="md:hidden">
                <MobileNav />                </div>
        </header>
    )
}

export default Header