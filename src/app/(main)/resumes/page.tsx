import { Button } from '@/components/ui/button';
import { PlusSquare } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Resumes',
};

export default function Page() {
  return <main className='max-w-7x1 mx-auto w-full px-3 py-6 space-y-6'>
    <Button className="mx-auto flex w-fit gap-2">
      <Link href='editor' className="flex items-center gap-2">
        <PlusSquare className='size-5' />
        New Resume
      </Link>
    </Button>
  </main>;
}
