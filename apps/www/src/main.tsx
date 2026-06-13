import App from '@/App';
import { setup } from '@/utils';
import '@commons/core/theme/default.css';
import { createRoot } from 'react-dom/client';

setup().then((): void => {
    createRoot(document.getElementById('app') as HTMLElement).render(<App />);
});
