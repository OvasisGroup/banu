interface HeaderProps {
    label: string;
    title: string;
}

const AuthHeader = ({
    title,
    label
}: HeaderProps) =>{
    return (
        <div className="flex flex-col items-center justify-center w-full gap-y-4">
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <p className="text-center text-sm text-gray-500">{title}</p>
            <p className="text-center text-sm text-gray-500">{label}</p>
        </div>
    )
}

export default AuthHeader