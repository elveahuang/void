import { AppIntlProvider } from '@/i18n';
import { AppRouterProvider } from '@/router';
import { JSX, Suspense } from 'react';

export default function App(): JSX.Element {
    return (
        <AppIntlProvider>
            <Suspense>
                <AppRouterProvider />
            </Suspense>
        </AppIntlProvider>
    );
}
