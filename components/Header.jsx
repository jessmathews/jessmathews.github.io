import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">

                    {/* desktop navbar  */}
                    <Navbar />
                    {/* <Link href="/contact">
                        <Button>Contact</Button>
                    </Link> */}
                <div className="xl:hidden">
                    <MobileNavbar></MobileNavbar>
                </div>
        </header>
    )
}

export default Header