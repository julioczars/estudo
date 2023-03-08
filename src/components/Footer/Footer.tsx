import { Flex, Box, Image } from "@chakra-ui/react"
import EmailIcon from "../../assets/icons/email.svg"
import InstagramIcon   from "../../assets/icons/instagram.svg"
import WhatsIcon  from "../../assets/icons/whatsapp.svg"
import BrandsIcon  from "../../assets/icons/brands.svg"

interface footerOptions {
    footerTheme?: any,
}

const footerDark = {
    bg: "darkColor",
    color: "lightColor",
}

const footerLight = {
    bg: "lightColor",
    color: "darkColor",
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
            >
                <Flex>
                    <Image src={InstagramIcon} style={{ marginRight: "15px" }} />
                    <Image src={WhatsIcon} style={{ marginRight: "15px" }} />
                    <Image src={EmailIcon} />
                </Flex>
                <Flex>
                    <Image src={BrandsIcon} />
                </Flex>
            </Flex>
        </>
    )
}