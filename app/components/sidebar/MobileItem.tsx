'use client';

import clsx from 'clsx';
import Link from 'next/link';

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={() => handleClick()}
      href={href}
      className={clsx(
        `
        group
        flex
        justify-center
        gap-x-3
        rounded-md
        p-3
        my-1
        text-sm
        leading-6
        w-full
        font-semibold
        text-gray-600
        hover:text-black
        hover:bg-gray-100
      `,
        active && 'bg-gray-100 text-black'
      )}
    >
      <Icon className="h-6 w-6 shrink-0" />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default MobileItem;
