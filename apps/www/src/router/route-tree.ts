import { createRootRoute, createRoute, lazyRouteComponent, Outlet, redirect } from '@tanstack/react-router';

import MainLayout from '@/layouts/MainLayout';
import SystemLayout from '@/layouts/SystemLayout';
import WebappLayout from '@/layouts/WebappLayout';

// ---------------------------------------------------------------------------
// Root route
// ---------------------------------------------------------------------------
const root = createRootRoute({
    component: Outlet,
});

// ---------------------------------------------------------------------------
// MainLayout — wraps all pages
// ---------------------------------------------------------------------------
const mainLayout = createRoute({
    path: '/',
    component: MainLayout,
    getParentRoute: () => root,
});

// ---------------------------------------------------------------------------
// Common routes (direct children of MainLayout)
// ---------------------------------------------------------------------------
const loginRoute = createRoute({
    path: '/login',
    component: lazyRouteComponent(() => import('@/modules/core/pages/common/login')),
    getParentRoute: () => mainLayout,
});

// ---------------------------------------------------------------------------
// Webapp routes — /web/*
// ---------------------------------------------------------------------------
const webappLayout = createRoute({
    path: '/web',
    component: WebappLayout,
    getParentRoute: () => mainLayout,
});

const webappHomeRoute = createRoute({
    path: '/',
    component: lazyRouteComponent(() => import('@/modules/core/pages/webapp/home')),
    getParentRoute: () => webappLayout,
});

const webappAboutRoute = createRoute({
    path: '/about',
    component: lazyRouteComponent(() => import('@/modules/core/pages/webapp/about')),
    getParentRoute: () => webappLayout,
});

// ---------------------------------------------------------------------------
// System routes — /console/*
// ---------------------------------------------------------------------------
const systemLayout = createRoute({
    path: '/console',
    component: SystemLayout,
    getParentRoute: () => mainLayout,
});

// Demo routes under /console/demo
const demoLayout = createRoute({
    path: '/demo',
    getParentRoute: () => systemLayout,
});

// Redirect /console/demo → /console/demo/index
const demoIndexRedirect = createRoute({
    path: '/',
    getParentRoute: () => demoLayout,
    beforeLoad: () => {
        throw redirect({ to: '/console/demo/index' });
    },
});

const demoIndexRoute = createRoute({
    path: '/index',
    component: lazyRouteComponent(() => import('@/modules/demo/pages/system/index')),
    getParentRoute: () => demoLayout,
});

const demoEditorRoute = createRoute({
    path: '/editor',
    component: lazyRouteComponent(() => import('@/modules/demo/pages/system/editor')),
    getParentRoute: () => demoLayout,
});

// ---------------------------------------------------------------------------
// Build & export the route tree
// ---------------------------------------------------------------------------
export const routeTree = root.addChildren([
    mainLayout.addChildren([
        loginRoute,
        webappLayout.addChildren([webappHomeRoute, webappAboutRoute]),
        systemLayout.addChildren([
            demoLayout.addChildren([demoIndexRedirect, demoIndexRoute, demoEditorRoute]),
            // coreSystemRoutes (currently empty) — add here when ready
        ]),
    ]),
]);
