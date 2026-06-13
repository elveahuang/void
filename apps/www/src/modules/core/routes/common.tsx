import { LazyComponent } from '@commons/core/types';
import { RouteObject } from 'react-router';

import { lazy } from 'react';

const Login: LazyComponent = lazy(() => import('@/modules/core/pages/common/login.tsx'));

export const coreCommonRoutes: RouteObject[] = [
    {
        path: 'login',
        element: <Login />,
    },
];
