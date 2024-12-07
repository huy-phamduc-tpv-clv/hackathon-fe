'use client';
// import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function useAllowAccessRouter() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || '';
        setIsMobile(/mobile/i.test(userAgent));

        if (pathname == "/") {
            if (isMobile)
                router.push('/maps');
            else {
                router.push('/qrcodeintro');
            }
        }

    }, []);

    console.log(isMobile)
    console.log(router)
    console.log(pathname)
}

export default useAllowAccessRouter;