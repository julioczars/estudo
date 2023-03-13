import { Box, Flex, Text } from '@chakra-ui/react'
import { Navbar } from '../../components/Header/Navbar/Navbar'
import { Menu } from '../../components/Header/Menu/Menu'
import { Footer } from '../../components/Footer/Footer'
import { ArrowDown } from '../../assets/icons/ArrowDown'

export function GuestArtistsDetail(){
    return(
        <Box
            minH="100vh"
            bg="darkColor"
        >
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Flex
                px="10%"
                mt="50px"
            >
                <Box
                    w="40%"
                    mr="10%"
                >
                    <Text
                        fontSize="22px"
                        color="lightColor"
                    >
                        NOME DO ARTISTA
                    </Text>
                    <Box
                        mt="15px"
                        h="550"
                        bg="lightColor"
                        p="25px"
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer 
                            adipiscing elit, sed diam nonummy nibh 
                            euismod tincidunt ut laoreet dolore magna 
                            aliquam erat volutpat. Ut wisi enim ad minim 
                            veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo 
                            consequat. Duis autem vel eum iriure dolor in 
                            hendrerit in vulputate velit esse molestie 
                            consequat, vel illum dolore eu feugiat nulla 
                            facilisis at vero eros et accumsan et iusto odio 
                            dignissim qui blandit praesent luptatum zzril 
                            delenit augue duis dolore te feugait nulla 
                            facilisi.
                        </Text>
                    </Box>
                </Box>

                <Box
                    w="50%"
                    mt="15px"
                >
                    <Box
                        h="510px"
                        bg="#C5351B"
                    >

                    </Box>
                    <Flex
                        justify="space-between"
                        color="lightColor"
                        mt="25px"
                    >
                        <Text fontSize="22px">
                            título <br />
                            técnica/tam
                        </Text>
                        <Text fontSize="22px" align="right">
                            SKETCHBOOK <br />
                            PRINT
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Footer footerTheme="light" />
        </Box>
    )
}