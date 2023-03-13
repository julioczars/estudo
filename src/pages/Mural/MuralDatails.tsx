import { Navbar } from "../../components/Header/Navbar/Navbar"
import { Menu } from "../../components/Header/Menu/Menu"
import { Footer } from "../../components/Footer/Footer"
import { Box, Flex } from "@chakra-ui/react"

export function MuralDatails(){
    return(
        <Box
            minH="100vh"
            bg="lightColor"
        >
            <Navbar navbarTheme="dark" />
            <Menu />
                <Flex>
                    <Box>

                    </Box>
                    <Box>


                    </Box>
                </Flex>
            <Footer />
        </Box>
    )
}