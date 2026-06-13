import React, { JSX, PropsWithChildren, Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';

export type MainLayoutProps = React.PropsWithChildren<{ layoutClassName?: string }>;

export default function MainLayout(props: PropsWithChildren<MainLayoutProps>): JSX.Element {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
}
