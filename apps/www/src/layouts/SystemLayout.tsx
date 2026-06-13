import React, { JSX, PropsWithChildren, Suspense } from 'react';
import { Outlet } from 'react-router';

export type MainLayoutProps = React.PropsWithChildren<{ layoutClassName?: string }>;

export default function SystemLayout(props: PropsWithChildren<MainLayoutProps>): JSX.Element {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
}
