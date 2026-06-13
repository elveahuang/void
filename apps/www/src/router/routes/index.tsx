import MainLayout from '@/layouts/MainLayout.tsx';
import { commonRoutes } from '@/router/routes/common.tsx';
import { systemRoutes } from '@/router/routes/system.tsx';
import { webappRoutes } from '@/router/routes/webapp.tsx';
import { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [...commonRoutes, ...webappRoutes, ...systemRoutes],
    },
];

export default routes;
