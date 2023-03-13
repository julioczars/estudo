import { Box, Flex, Text } from "@chakra-ui/react"
import { Footer } from "../../components/Footer/Footer"
import { Menu } from "../../components/Header/Menu/Menu"
import { Navbar } from "../../components/Header/Navbar/Navbar"
import { ArrowRightCircle } from "../../assets/icons/ArrowRightCircle"

export function About() {
    return (
        <Box
            minH="100vh"
            bg="darkColor"
        >
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Box
                px="10%"
                color="lightColor"
            >
                <Box
                    maxW="60%"
                    pt="50px"
                >
                    <ArrowRightCircle iconColor="#E0DDDE" />
                    <Text
                        mt="25px"
                    >
                        “Sobre estes tempos de morte, onde a vida encontra seu caminho através do presente.
                        Presente este, contido em um intercruzamento de nosso passado histórico e um futuro
                        aparentemente incerto. Aparentemente!. Com isso, a estética do afrofuturismo
                        enquanto método de fortalecimento de unidades culturais esquecidas e silenciadas, faz
                        frente a esta narrativa colonizante e excludente.  recurso da imagem enquanto
                        possibilidade de reescrita de nossa realidade afrocentrada.” Ane Caroline
                    </Text>
                    <Text
                        mt="25px"
                    >
                        Laboratório de experimentação criativa decolonial, por Rayce de Melo
                    </Text>
                </Box>
                <Box
                    textAlign="end"
                >
                    <Text
                        fontSize="22px"
                    >
                        I CICLO DE IMERSÃO
                    </Text>
                    <Text
                        mt="25px"
                    >
                        Equipe de desenvolvimento:
                    </Text>
                </Box>
                <Flex
                    mt="50px"
                >
                    <Box>
                        <Text
                            fontSize="22px"
                            textAlign="center"
                        >
                            DAIANE SOARES
                        </Text>
                        <Box
                            h="250px"
                            bg="#297D38"
                            minW="200px"
                            mt="15px"
                        >
                            <Text
                                color="darkColor"
                                p="10px"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- maliquip ex ea commo
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            fontSize="22px"
                            textAlign="center"
                        >
                            ANE CAROLINE
                        </Text>
                        <Box
                            h="250px"
                            bg="#F8AE00"
                            minW="200px"
                            mt="15px"
                        >
                            <Text
                                color="darkColor"
                                p="10px"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- maliquip ex ea commo
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            fontSize="22px"
                            textAlign="center"
                        >
                            JONH CLIVANI
                        </Text>
                        <Box
                            h="250px"
                            bg="#C5351B"
                            minW="200px"
                            mt="15px"
                        >
                            <Text
                                color="darkColor"
                                p="10px"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- maliquip ex ea commo
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            fontSize="22px"
                            textAlign="center"
                        >
                            RAYZA KELLE
                        </Text>
                        <Box
                            h="250px"
                            bg="#E97513"
                            minW="200px"
                            mt="15px"
                        >
                            <Text
                                color="darkColor"
                                p="10px"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- maliquip ex ea commo
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            fontSize="22px"
                            textAlign="center"
                        >
                            RAYCE DE MELO
                        </Text>
                        <Box
                            h="250px"
                            bg="#E0DDDE"
                            minW="200px"
                            mt="15px"
                        >
                            <Text
                                color="darkColor"
                                p="10px"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- maliquip ex ea commo
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Footer footerTheme="light" />
        </Box>
    )
}