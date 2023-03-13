import { Navbar } from "../../components/Header/Navbar/Navbar"
import { Menu } from "../../components/Header/Menu/Menu"
import { Footer } from "../../components/Footer/Footer"
import { Box, Flex, Text } from "@chakra-ui/react"

export function Mural(){
    return(
        <Box
            minH="100vh"
            bg="lightColor"
        >
            <Navbar navbarTheme="dark" />
            <Menu />
            <Box
                px="10%"
                mt="50px"
            >
                <Flex>
                    <Box
                        mr="5%"
                        w="45%"
                    >
                        <Text fontSize="28px">TÍTULO</Text>
                        <Text>Chamada: </Text>
                        <Text>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </Text>
                        <Text>Autor, Cidade, Data, Arte/imagem:</Text>
                    </Box>
                    <Box
                        ml="5%"
                        w="45%"
                        bg="#297D38"
                    >
                    </Box>
                </Flex>
                <Flex>
                    <Box
                        mr="5%"
                        w="45%"
                        pt="15px"
                    >
                        <Text fontSize="28px">TÍTULO</Text>
                        <Text>Chamada: </Text>
                        <Text>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </Text>
                        <Text>Autor, Cidade, Data, Arte/imagem:</Text>
                    </Box>
                    <Box
                        ml="5%"
                        w="45%"
                        bg="#212121"
                    >
                    </Box>
                </Flex>
                <Flex>
                    <Box
                        mr="5%"
                        w="45%"
                        pt="15px"
                    >
                        <Text fontSize="28px">TÍTULO</Text>
                        <Text>Chamada: </Text>
                        <Text>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </Text>
                        <Text>Autor, Cidade, Data, Arte/imagem:</Text>
                    </Box>
                    <Box
                        ml="5%"
                        w="45%"
                        bg="#C5351B"
                    >
                    </Box>
                </Flex>
                <Flex>
                    <Box
                        mr="5%"
                        w="45%"
                        pt="15px"
                    >
                        <Text fontSize="28px">TÍTULO</Text>
                        <Text>Chamada: </Text>
                        <Text>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </Text>
                        <Text>Autor, Cidade, Data, Arte/imagem:</Text>
                    </Box>
                    <Box
                        ml="5%"
                        w="45%"
                        bg="#F8AE00"
                    >
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
    )
}