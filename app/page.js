import Logo from '@/app/ui/util/logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import styles from '@/app/ui/home.module.css'; //there is no css I want to apply right now
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-700 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

          <p className = { `${lusitana.className} text-2xl` }>
            <strong>Welcome to Badger.</strong> Always follow up!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Go Inside</span> 
            {/* <ArrowRightIcon className="w-5 md:w-6" /> */}
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg p-6 md:w-3/5 md:px-28 md:py-12">
         
          <Image
            src="/Logo.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Drawing of a badger. Badger always follows up!"
          />
        </div>
      </div>
    </main>
  );
}
