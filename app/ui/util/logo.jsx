// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
        <Image
            src="/Logo.png"
            width={150}
            height={150}
            className="hidden md:block round"
            alt="Drawing of a badger. Badger always follows up!"
          /> 
      <p className="text-[44px]">  Badger</p>
    </div>
  );
}
