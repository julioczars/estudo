import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";

export function Login(){
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
                            placeholder="senha"
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
                            <Text>entrar</Text>
                            <Box>
                                <Image m="0 auto" src={ArrowLeft} />
                            </Box>
                        </Button>
                    </Box>
                </Flex>
            </FormControl>
        </>
    )
}