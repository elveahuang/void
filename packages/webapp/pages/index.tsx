import { Button } from '@heroui/react';
import { Icon as VIcon } from '@iconify/react';
import { JSX } from 'react';

export function Home(): JSX.Element {
    return (
        <div>
            <div className='p-8 text-center'>Home</div>
            <Button type={'button'}>Home</Button>
            <VIcon icon='mdi-home' />
        </div>
    );
}

export default Home;
