import { Box, FormControl, Input, FormLabel } from "@chakra-ui/react";
import { RegisterButton } from "../Buttons/RegisterButton";

export function Register(){
    return(

        <FormControl>
            <Box
                mt="15px"
                mb="15px"
            >   
                <FormLabel>nome</FormLabel>
                <Input 
                    color="darkColor"
                    mb="10px"
                />
                <FormLabel>e-mail</FormLabel>
                <Input 
                    mb="10px"
                    color="darkColor"
                />
                <FormLabel>confirme o e-mail</FormLabel>
                <Input 
                    mb="10px"
                    color="darkColor"
                />
                <FormLabel>senha</FormLabel>
                <Input 
                    color="darkColor"
                    mb="10px"
                />
                <FormLabel>confirmar senha</FormLabel>
                <Input 
                    color="darkColor"
                    mb="10px"
                />
            </Box>
            <Box
                mb="15px"
            >
                <RegisterButton />
            </Box>
            
        </FormControl>
    )
}