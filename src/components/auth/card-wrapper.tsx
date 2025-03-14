import React from 'react';
import AuthHeader from './auth-header';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader, 
  } from "@/components/ui/card"
import { BackButton } from './back-button';


  interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    title: string;
    showSocial? : boolean;
    backButtonHref: string;
  }

  const CardWrapper = ({ children, headerLabel, backButtonLabel, title, backButtonHref }: CardWrapperProps) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md">
            <CardHeader>
                <AuthHeader title={title} label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
  }

  export default CardWrapper;