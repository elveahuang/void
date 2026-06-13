import { log } from '@commons/core/utils';
import { isEqual } from 'es-toolkit/compat';
import { JSX } from 'react';
import { createHashHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/router/route-tree';

export class RouterConfig {
    mode?: string = 'history';
    base?: string = '';
    customWhiteList?: Array<string> = [];
}

export let router: ReturnType<typeof createRouter>;

export async function setupRouter(config: RouterConfig): Promise<void> {
    log(`Router [mode - ${config.mode}] initialize...`);
    const options: Parameters<typeof createRouter>[0] = {
        routeTree,
        basepath: config.base || '/',
    };
    if (isEqual(config.mode, 'hash')) {
        options.history = createHashHistory();
    }
    router = createRouter(options);
}

// Register router type for type-safe navigation etc.
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export function AppRouterProvider(): JSX.Element {
    return <RouterProvider router={router} />;
}
