import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className='absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center'>
      <span className='bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
        404
      </span>
      <h2 className='my-2 text-2xl font-bold'>Something&apos;s missing</h2>
      <p>
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className='mt-8 flex justify-center gap-2'>
        <Link
          href='/portal'
          className='inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
