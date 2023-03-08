import { Link, Flex, Box, Text, Image } from "@chakra-ui/react"
//import ArrowUpIcon from '../../../assets/icons/arrow_up.svg'

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
                <Flex>
                    <Text>
                        <Link href="/acesso">acessar</Link>
                    </Text>
                    <Box
                        ml="10px"
                    >
                        {/* <Image src={ArrowUpIcon} /> */}
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}