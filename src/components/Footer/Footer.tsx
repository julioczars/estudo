import { Flex, Box, Image } from "@chakra-ui/react"
import { Email } from "../../assets/icons/Email"
import { Instagram }   from "../../assets/icons/Instagram"
import { Whatsapp }  from "../../assets/icons/Whatsapp"
import { Brands }  from "../../assets/icons/Brands"

interface footerOptions {
    footerTheme?: any,
}

const footerDark = {
    bg: "darkColor",
    color: "lightColor",
    icon: "#E0DDDE"
}

const footerLight = {
    bg: "lightColor",
    color: "darkColor",
    icon: "#212121"
}

export function Footer({footerTheme}:footerOptions){

    const footerColor = (footerTheme === "dark") ? footerDark : footerLight

    return(
        <>
            <Flex
                h="50px"
                px="10%"
                bg={footerColor.bg}
                justify="space-between"
                align="center"
                position="absolute"
                w="100%"
                bottom="0"
            >
                <Flex>
                    <Box mr="15px">
                        <Instagram iconColor={footerColor.icon} />
                    </Box>
                    <Box mr="15px">
                        <Whatsapp iconColor={footerColor.icon} />
                    </Box>
                    <Box>
                        <Email iconColor={footerColor.icon} />
                    </Box>
                </Flex>
                <Flex>
                    <Brands iconColor={footerColor.icon} />
                </Flex>
            </Flex>
        </>
    )
}