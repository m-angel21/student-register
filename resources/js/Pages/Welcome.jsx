import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className='flex items-center justify-between flex-col w-full h-screen'>
                <h1>Student</h1>
            </div>
        </>
    );
}
