interface IconOptions{
    iconColor?: string;
}

export function Whatsapp(prop: IconOptions){
    return(
        <>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.679688 25.3803C1.05969 23.9503 1.43969 22.5503 1.80969 21.1503C1.94969 20.6403 2.0697 20.1202 2.2197 19.6102C2.3397 19.2102 2.2797 18.8402 2.0997 18.4702C1.1897 16.6402 0.689689 14.6903 0.759689 12.6403C0.899689 8.03028 2.88969 4.45024 6.75969 2.04024C8.72969 0.810239 10.9297 0.220239 13.2297 0.290239C17.2197 0.410239 20.4397 2.14024 22.8197 5.42024C24.5497 7.80024 25.3297 10.5103 25.1197 13.4603C24.8197 17.8103 22.8397 21.1902 19.1897 23.4802C16.9597 24.8802 14.5097 25.3903 11.9197 25.1903C10.4397 25.0803 9.01969 24.6703 7.67969 24.0103C7.27969 23.8103 6.8997 23.7703 6.4697 23.8803C4.5897 24.3903 2.7097 24.8803 0.829697 25.3803C0.789697 25.3903 0.759687 25.3803 0.679688 25.3803ZM3.4697 22.5603C3.5897 22.5403 3.6397 22.5403 3.6897 22.5303C4.6897 22.2603 5.6997 22.0202 6.6897 21.7202C7.1697 21.5802 7.56969 21.6403 7.99969 21.8903C10.9097 23.5103 13.9397 23.7002 16.9697 22.3502C20.5197 20.7602 22.5897 17.9403 23.0997 14.0003C23.4097 11.6303 22.9497 9.38026 21.6997 7.37026C19.4497 3.76026 16.1897 2.04028 11.9897 2.39028C9.0997 2.63028 6.7497 3.98024 4.9397 6.29024C2.3497 9.61024 1.9997 14.0702 4.0197 17.8002C4.3897 18.4802 4.4497 19.1503 4.2097 19.8903C3.9397 20.7503 3.7197 21.6303 3.4697 22.5603Z" fill={prop.iconColor}/>
                <path d="M16.3192 18.7401C14.9992 18.6701 13.8492 18.2801 12.7792 17.6801C10.3292 16.3101 8.52922 14.2901 7.21922 11.8001C6.41922 10.2901 6.68922 8.59004 7.84922 7.41004C8.23922 7.01004 9.02921 6.87008 9.50921 7.13008C9.62921 7.19008 9.73921 7.33009 9.78921 7.46009C10.1292 8.27009 10.4692 9.09004 10.7892 9.91004C10.9292 10.25 10.7392 10.5401 10.5592 10.8001C10.4092 11.0301 10.2192 11.2401 10.0492 11.4501C9.84922 11.6901 9.80922 11.9401 9.96922 12.2101C10.9392 13.8901 12.2992 15.1201 14.0792 15.8601C14.5092 16.0401 14.6592 15.9801 14.9492 15.6201C15.2192 15.2801 15.4892 14.94 15.7592 14.6C15.9592 14.35 16.1892 14.2801 16.4992 14.4401C17.2092 14.8201 17.9392 15.1701 18.6692 15.5101C18.9992 15.6701 19.1192 15.8901 19.0992 16.2601C19.0292 17.4401 18.1592 18.41 16.8892 18.66C16.6692 18.7 16.4492 18.7201 16.3192 18.7401Z" fill={prop.iconColor}/>
            </svg>
        </>
    )
}