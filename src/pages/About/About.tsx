import { Footer } from "../../components/Footer/Footer"
import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"

export function About(){
    return(
        <>
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Footer footerTheme="light" />
        </>
    )
}