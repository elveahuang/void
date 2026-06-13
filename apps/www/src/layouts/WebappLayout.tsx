import React, { JSX, PropsWithChildren, Suspense } from 'react';
import { Outlet } from 'react-router';

export type DefaultLayoutProps = React.PropsWithChildren<{ layoutClassName?: string }>;

export default function WebappLayout(props: PropsWithChildren<DefaultLayoutProps>): JSX.Element {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
}
