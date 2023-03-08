import { Flex } from "@chakra-ui/react"
import { Footer } from "../../components/Footer/Footer"
import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"

export function Home(){
    return(
        <>
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Flex>

            </Flex>
            <Footer footerTheme="light" />
        </>
    )
}