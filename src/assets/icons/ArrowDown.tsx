interface IconOptions{
    iconColor?: string;
}

export function ArrowDown(prop: IconOptions){
    return(
        <>
            <svg width="20" height="51" viewBox="0 0 20 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5Z" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M10.1191 28.2402V32.1502" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M10.1191 21.8398V25.7498" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M17.8896 42.4297L10.1196 49.9997L2.59961 42.4797" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M2.59961 34.25L10.1196 41.77L17.8896 34.21L2.59961 34.25Z" fill={prop.iconColor}/>
            </svg>
        </>
    )
}

