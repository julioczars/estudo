import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from '@chakra-ui/react'
import { Navbar } from '../../components/Header/Navbar/Navbar'
import { Menu } from '../../components/Header/Menu/Menu'
import { Footer } from '../../components/Footer/Footer'
import { ArrowDown } from '../../assets/icons/ArrowDown'

export function GuestArtists(){
    return(
        <Box
            minH="100vh"
            bg="darkColor"
        >
            <Navbar navbarTheme="light" />
            <Menu menuTheme="dark" />
            <Flex
                px="10%"
            >
                <Tabs
                    orientation="vertical"
                    color="lightColor"
                    variant="line"
                    align="start"
                    w="1000%"
                    mt="100px"
                >
                    <TabList
                        w="100%"
                    >
                        <Tab justifyContent="flex-start" fontSize="22px">NAYÒ</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">LIRIZ</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">RAEMI</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">MIDRUSA</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">ANDY AYO REIS</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">GABRIELA CORREIA</Tab>
                        <Tab justifyContent="flex-start" fontSize="22px">ARTISTA DESCONHECIDA, THAIS</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                        <Flex
                            mb="15px"
                            mx="auto"
                            justify="center"
                        >
                            <ArrowDown iconColor="#E0DDDE" />
                        </Flex>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            Duis autem vel eum iriure dolor in hendrerit in vulputate 
                            velit esse molestie consequat, vel illum dolore eu feugiat 
                            nulla facilisis at vero eros et accumsan et iusto odio 
                            dignissim qui blandit praesent luptatum zzril delenit augue 
                            duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </TabPanel>
                        <TabPanel>
                        <Flex
                            mb="15px"
                            mx="auto"
                            justify="center"
                        >
                            <ArrowDown iconColor="#E0DDDE" />
                        </Flex>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            Duis autem vel eum iriure dolor in hendrerit in vulputate 
                            velit esse molestie consequat, vel illum dolore eu feugiat 
                            nulla facilisis at vero eros et accumsan et iusto odio 
                            dignissim qui blandit praesent luptatum zzril delenit augue 
                            duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequa.</p>
                        </TabPanel>
                        <TabPanel>
                        <Flex
                            mb="15px"
                            mx="auto"
                            justify="center"
                        >
                            <ArrowDown iconColor="#E0DDDE" />
                        </Flex>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            Duis autem vel eum iriure dolor in hendrerit in vulputate 
                            velit esse molestie consequat, vel illum dolore eu feugiat 
                            nulla facilisis at vero eros et accumsan et iusto odio 
                            dignissim qui blandit praesent luptatum zzril delenit augue 
                            duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet 
                            dolore magna aliquam erat volutpat. Ut wisi enim ad 
                            minim veniam, quis nostrud exerci tation ullamcorper 
                            suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Footer footerTheme="dark" />
        </Box>
    )
}