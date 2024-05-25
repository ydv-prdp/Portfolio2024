import Link from "next/link"
import {Button} from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Pradeep Yadav <span className="text-accent">.</span>
                </h1>
            </Link>
            {/* Desktop Nav  */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href={"/contact"}>
                    <Button>Hire Me</Button>
                </Link>
            </div>
             {/* Mobile Nav  */}
             <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header