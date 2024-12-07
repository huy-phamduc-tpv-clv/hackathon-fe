"use client"
import React from 'react'
import useAllowAccessRouter from '@/app//hook/useAllowAccessRouter'
function ProcessingComponent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useAllowAccessRouter();
    return (<>
        {children}
    </>)
}


export default ProcessingComponent;