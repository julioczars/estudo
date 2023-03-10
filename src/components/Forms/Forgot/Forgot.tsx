import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import ArrowRight from "../../../assets/icons/arrow-right.svg";

export function Forgot(){
    return(
        <>
            <FormControl>
                <Flex>
                    <Box
                        mr="30px"
                        w="80%"
                        mt="15px"
                    >
                        <Input 
                            placeholder="email"
                            color="darkColor"
                        />
                        <Input 
                            placeholder="confirmar email"
                            mt="10px"
                            color="darkColor"
                        />
                    </Box>
                    <Box
                        w="20%"
                        mt="15px"
                    >
                        <Button
                            h="100%"
                            w="100%"
                            bg="#C5351B"
                            alignItems="center"
                            display="block"
                            alignContent="center"
                            color="lightColor"
                        >
                            <Text>enviar</Text>
                            <Box
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image src={ArrowRight} />
                            </Box>
                        </Button>
                    </Box>
                </Flex>
            </FormControl>
        </>
    )
}