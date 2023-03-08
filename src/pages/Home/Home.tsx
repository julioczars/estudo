import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"

export function Home(){
    return(
        <>
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
        </>
    )
}