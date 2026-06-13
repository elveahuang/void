import SystemLayout from '@/layouts/SystemLayout.tsx';
import { coreSystemRoutes } from '@/modules/core/routes';
import { demoSystemRoutes } from '@/modules/demo/routes';
import { RouteObject } from 'react-router';

export const systemRoutes: RouteObject[] = [
    {
        path: '/console',
        element: <SystemLayout />,
        children: [...demoSystemRoutes, ...coreSystemRoutes],
    },
];
