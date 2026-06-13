import { LazyComponent } from '@commons/core/types';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router';

const Index: LazyComponent = lazy(() => import('@/modules/demo/pages/system/index.tsx'));
const Editor: LazyComponent = lazy(() => import('@/modules/demo/pages/system/editor.tsx'));

export const demoSystemRoutes: RouteObject[] = [
    {
        path: 'demo',
        children: [
            {
                path: '',
                element: <Navigate to={'index'} />,
            },
            {
                path: 'index',
                element: <Index />,
            },
            {
                path: 'editor',
                element: <Editor />,
            },
        ],
    },
];
