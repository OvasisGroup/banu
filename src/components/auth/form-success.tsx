import { CheckCheckIcon } from "lucide-react";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className="flex space-x-4 items-center p-2 rounded-lg text-green-500 bg-green-500/30">
            <CheckCheckIcon className="w-4 h-4"/> 
            <p className="text-sm">{message}</p>
        </div>
    )
}