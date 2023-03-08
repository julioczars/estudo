import { Flex, Link } from "@chakra-ui/react"
import './style.css';
import { useState } from "react";

interface MenuOptions {
    menuTheme?: any,
}

const menuDark = {
    bg: "darkColor",
    color: "lightColor",
}

const menuLight = {
    bg: "lightColor",
    color: "darkColor",
}

export function Menu({ menuTheme }: MenuOptions) {

    const [activeMenu, setActiveMenu] = useState();

    const menuColor = (menuTheme === "dark") ? menuDark : menuLight

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                px="10%"
                bg={menuColor.bg}
                borderBottom="solid 2px"
                borderColor={menuColor.color}
                h="100px"
                fontSize="18px"
            >
                <Link
                    href="/"
                    color={menuColor.color}
                >
                    início
                </Link>

                <Link
                    href="/sobre" 
                    color={menuColor.color}
                >
                    sobre
                </Link>

                <Link
                    href="/artistas"
                    color={menuColor.color}
                >
                    artistas convidados
                </Link>

                <Link
                    href="/producoes"
                    color={menuColor.color}
                >
                    produções
                </Link>

                <Link
                    href="/mural"
                    color={menuColor.color}
                >
                    mural
                </Link>

            </Flex>
        </>
    )
}