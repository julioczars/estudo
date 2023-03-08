import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"
import { Footer } from "../../components/Footer/Footer"
import { Register } from "../../components/Forms/Register/Register"
import { Login } from "../../components/Forms/Login/Login"
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import BrandOboIcon from "../../assets/brands/obo-brand-xl.svg"

export function Singin(){
    return (
        <Box
            bg="lightColor"
        >
            <Navbar navbarTheme="dark" />
            <Menu menuTheme="ligh" />

            <Flex
                px="10%"
            >
                <Box
                    mr="10%"
                    w="40%"
                >
                    <Box
                        mt="50px"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="28px"
                            color="darkColor"
                        >
                            ENTRAR
                        </Text>

                        <Login />
                    </Box>

                    <Box
                        mt="50px"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="28px"
                            color="darkColor"
                        >
                            CADASTRAR
                        </Text>

                        <Register />
                    </Box>
                    
                    
                </Box>

                <Box
                    ml="10%"
                    w="40%"
                >
                    <Box
                        mt="50px"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="28px"
                            color="darkColor"
                        >
                            recuperar senha
                        </Text>

                        <Login />
                    </Box>
                    <Box
                        mt="120px"
                    >
                        <Image src={BrandOboIcon} />
                    </Box>
                </Box>
            </Flex>

            <Footer footerTheme="dark" />
        </Box>
    )
}