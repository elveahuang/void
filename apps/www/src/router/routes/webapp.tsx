import WebappLayout from '@/layouts/WebappLayout.tsx';
import { coreWebappRoutes } from '@/modules/core/routes';
import { RouteObject } from 'react-router';

export const webappRoutes: RouteObject[] = [
    {
        path: '/web',
        element: <WebappLayout />,
        children: [...coreWebappRoutes],
    },
];
