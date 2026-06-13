import { cn } from '@commons/core/utils';
import { JSX } from 'react';

export function Home(): JSX.Element {
    return (
        <div className={cn('p-4', 'p-8', 'bg-red-500')}>
            <div className='p-8 text-center'>Home</div>
        </div>
    );
}

export default Home;
