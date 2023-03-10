import { Box } from "@chakra-ui/react"
import { Footer } from "../../components/Footer/Footer"
import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"

export function About(){
    return(
        <Box
            minH="100vh"
            bg="darkColor"
        >
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Footer footerTheme="light" />
        </Box>
    )
}