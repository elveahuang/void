import { LazyComponent } from '@commons/core/types';
import { RouteObject } from 'react-router';

import { lazy } from 'react';

const Index: LazyComponent = lazy(() => import('@/modules/demo/pages/system/index.tsx'));

export const coreSystemRoutes: RouteObject[] = [];
