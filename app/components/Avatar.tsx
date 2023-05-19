'use client';

import { User } from '@prisma/client';
import Image from 'next/image';

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative ">
      <div className="relative top-1 inline-block h-9 w-9 md:h-11 md:w-11">
        <Image
          className="rounded-full"
          fill
          src={user?.image || '/images/placeholder.jpg'}
          alt="placeholder"
        />
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:w-3 md:h-3" />
      </div>
    </div>
  );
};

export default Avatar;
