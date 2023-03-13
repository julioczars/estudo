import { Box, Flex, Image, Fade, useDisclosure, Text, ScaleFade } from "@chakra-ui/react"
import { Footer } from "../../components/Footer/Footer"
import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"
import OboBrandHomeIcon from "../../assets/brands/obo-brand-home.svg";

export function Home(){

    const { isOpen, onToggle } = useDisclosure({id: "10"})

    return(
        <Box
            minH="100vh"
            bg="darkColor"
        >
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />

            <Box>

                <Flex
                    w="100%"
                    h="500px"
                    mt="50px"
                    justify="center"
                    px="10%"
                >
                    <Flex
                        w="33.3%"
                        bg="#C5351B"
                        align="end"
                        cursor="pointer"
                        onMouseEnter={onToggle}
                        onMouseLeave={onToggle}
                    >
                        {/* <ScaleFade initialScale={0.8} in={isOpen}>
                            <Box
                                alignContent="center"
                                bg="lightColor"
                                padding="30px"
                                cursor="pointer"
                                onMouseEnter={onToggle}
                                onMouseLeave={onToggle}
                            >
                                <Text
                                    color="#C5351B"
                                    fontSize="20px"
                                >
                                    Título
                                </Text>
                                <Text>
                                    Descrição/Chamada 
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                </Text>                                
                            </Box>
                        </ScaleFade> */}
                    </Flex>

                    <Flex
                        w="33.3%"
                        bg="#297D38"
                        onMouseEnter={onToggle}
                        onMouseLeave={onToggle}
                        align="end"
                        cursor="pointer"
                    >
                        {/* <ScaleFade initialScale={0.8} in={isOpen}>
                            <Box
                                alignContent="center"
                                bg="lightColor"
                                padding="30px"
                                cursor="pointer"
                            >
                                <Text
                                    color="#C5351B"
                                    fontSize="20px"
                                >
                                    Título
                                </Text>
                                <Text>
                                    Descrição/Chamada 
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                </Text>                                
                            </Box>
                        </ScaleFade> */}
                    </Flex>

                    <Flex
                        w="33.3%"
                        bg="#F8AE00"
                        onMouseEnter={onToggle}
                        onMouseLeave={onToggle}
                        align="end"
                        cursor="pointer"
                    >
                        <ScaleFade initialScale={0.8} in={isOpen}>
                            <Box
                                alignContent="center"
                                bg="lightColor"
                                padding="30px"
                                cursor="pointer"
                            >
                                <Text
                                    color="#C5351B"
                                    fontSize="20px"
                                >
                                    Título
                                </Text>
                                <Text>
                                    Descrição/Chamada 
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                </Text>                                
                            </Box>
                        </ScaleFade>
                    </Flex>

                </Flex>
                <Flex
                    justify="center"
                    align="center"
                    h="300px"
                >
                    <Image
                        src={OboBrandHomeIcon}
                    />
                </Flex>
            </Box>
            <Footer footerTheme="light" />
        </Box>
    )
}