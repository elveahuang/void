import { log } from '@commons/core/utils';
import { isEqual } from 'es-toolkit/compat';
import { JSX } from 'react';
import type { RouteObject } from 'react-router';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router';

export class RouterConfig {
    mode?: string = 'history';
    base?: string = '';
    routes?: RouteObject[] = [];
    customWhiteList?: Array<string> = [];
}

export let router: ReturnType<typeof createBrowserRouter>;

export async function setupRouter(config: RouterConfig): Promise<void> {
    log(`Router [mode - ${config.mode}] initialize...`);
    if (isEqual(config.mode, 'hash')) {
        router = createHashRouter(config.routes as RouteObject[], {});
    } else {
        router = createBrowserRouter(config.routes as RouteObject[], {
            basename: config.base,
        });
    }
}

export function AppRouterProvider(): JSX.Element {
    return <RouterProvider router={router} />;
}
