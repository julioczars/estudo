import { Link, Flex, Box, Text, Image } from "@chakra-ui/react"
import { ArrowUpIcon } from '../../../assets/icons/ArrowUp'

interface NavbarOptions{
    navbarTheme?: any,
}

const navbarDark = {
    bg: "darkColor",
    color: "lightColor",
}

const navbarLight = {
    bg: "lightColor",
    color: "darkColor",
}

export function Navbar({ navbarTheme }:NavbarOptions){

    const navbarColors = navbarTheme === "dark" ? navbarDark : navbarLight;

    return(
        <>
            <Flex
                h="85px"
                px="10%"
                bg={navbarColors.bg}
                color={navbarColors.color}
                align="center"
                justify="space-between"
                fontSize="18px"
            >
                <Box>
                    <Text
                        fontWeight="700"
                    >
                        ARTE AFROINDÍGENALATINOAMERICANA
                    </Text>
                </Box>
                <Flex
                    color="#C5410D"
                >
                    <Link 
                        href="/acesso" 
                        display="flex"
                    >
                        acessar
                        <ArrowUpIcon iconColor="#C5410D" />
                    </Link>
    
                </Flex>
            </Flex>
        </>
    )
}