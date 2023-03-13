import { Button, Image } from "@chakra-ui/react";
import ArrowLeft from "../../../assets/icons/arrow-left.svg"

export function RegisterButton(){
    return(
        <>
            <Button
                h="85px"
                bg="#C5351B"
                alignItems="center"
                w="100%"
                color="lightColor"
            >

                cadastrar 
                <Image src={ArrowLeft} ml="5px" />
            </Button>
        </>
    )
}