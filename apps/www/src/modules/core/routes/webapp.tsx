import { LazyComponent } from '@commons/core/types';
import { RouteObject } from 'react-router';

import { lazy } from 'react';

const Home: LazyComponent = lazy(() => import('@/modules/core/pages/webapp/home.tsx'));
const About: LazyComponent = lazy(() => import('@/modules/core/pages/webapp/about.tsx'));

export const coreWebappRoutes: RouteObject[] = [
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: 'about',
        element: <About />,
    },
];
