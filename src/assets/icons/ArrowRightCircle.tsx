interface IconOptions{
    iconColor?: string;
}

export function ArrowRightCircle(prop: IconOptions){
    return(
        <>
            <svg width="53" height="18" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.5 18C49.1944 18 53 14.1944 53 9.5C53 4.80558 49.1944 1 44.5 1C39.8056 1 36 4.80558 36 9.5C36 14.1944 39.8056 18 44.5 18Z" fill={prop.iconColor}/>
                <path d="M6.50977 9.01953H10.4298" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M0.120117 9.01953H4.03011" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M20.71 1.25L28.27 9.01999L20.75 16.54" stroke={prop.iconColor} stroke-width="1.4173" stroke-miterlimit="10"/>
                <path d="M12.5305 16.54L20.0505 9.01999L12.4805 1.25L12.5305 16.54Z" fill={prop.iconColor}/>
            </svg>
        </>
    )
}

