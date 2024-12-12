'use client';

import {Inter} from 'next/font/google';
import {Toaster} from 'react-hot-toast';
import React, {Suspense} from "react";
import '../styles/globals.css';

const interFont = Inter({subsets: ['latin']});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${interFont.className} bg-accents-dark`}>
        <div className="flex gap-[12px] items-center justify-center h-[200px] bg-accents-black">
            <img src="/images/rocket.svg" alt="Rocket" className="h-[36px] w-[22px]"/>
            <h1 className="font-black text-[40px] leading-[48.41px]">
                <span className="text-accents-blue">Todo</span> <span className="text-accents-purple">App</span></h1>
        </div>
        <main className="h-full">
            <Suspense>
                <div className="container mx-auto max-w-[736px] py-[91px]">
                    {children}
                </div>
            </Suspense>
        </main>
        <Toaster position="bottom-right"/>
        </body>
        </html>
    );
}
