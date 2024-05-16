import { twMerge } from "tailwind-merge";
import Image from 'next/image';
import Logo from '@/public/images/logo.png'

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ 
  children,
  className
 }) => {
  return ( 
    <>
    <div 
      className={twMerge(
        `
        bg-customColor1
        rounded-lg 
        h-fit 
        w-full
        `, 
        className
      )}>
      {children}
    </div></>
  );
}
 
export default Box;