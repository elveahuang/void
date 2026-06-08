import '@/styles/global.css';
import clsx from 'clsx';
import React, { JSX } from 'react';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>ME</title>
            </head>
            <body className={clsx('text-foreground bg-background text-medium min-h-screen font-sans antialiased')}>
                <main className='relative flex min-h-[calc(100vh-64px)] w-full flex-col'>{children}</main>
            </body>
        </html>
    );
}
