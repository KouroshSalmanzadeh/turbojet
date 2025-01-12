"use client"

import React, { useRef, useState } from 'react';

// import styles from "./header.module.css";

import Link from 'next/link';

import { flushSync } from 'react-dom';

import Logo from '@/assets/logo/Logo';

import ToggleThemeComponent from '../ToggleTheme/ToggleThemeComponent';
import { HambergerMenu } from 'iconsax-react';

const HeaderComponent: React.FC = () => {

    const ref = useRef<HTMLLabelElement>(null);

    const [theme, setTheme] = useState<boolean>(false);

    const changeTheme = async () => {
        // * Return early if View Transition API is not supported
        //  * or user prefers reduced motion
        if (
          !ref.current ||
          !document.startViewTransition ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          setTheme(theme);
          return;
        }
    
        await document.startViewTransition(() => {
          flushSync(() => {
            if (theme) {
              setTheme(!theme);
              document.documentElement.classList.remove("dark");
            } else {
              setTheme(!theme);
              document.documentElement.classList.add("dark");
            }
          });
        }).ready;
    
        if (ref.current) {
          const parent = ref.current;
          
          if (!parent) return;
          const { top, left, width, height } = parent.getBoundingClientRect();
    
          // محاسبه مرکز عنصر
          const centerX = left + width - 25;
          const centerY = top + height - 25;
    
          // محاسبه شعاع بزرگترین دایره
          const maxRadius = Math.hypot(
            Math.max(centerX, window.innerWidth - centerX),
            Math.max(centerY, window.innerHeight - centerY),
          );
    
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${centerX}px ${centerY}px)`,
                `circle(${maxRadius}px at ${centerX}px ${centerY}px)`,
              ],
            },
            {
              duration: 500,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            },
          );
        }
      };
  return (
    <header className="w-full h-20 flex items-center justify-between rounded-b-xl sm:w-[97%] lg:w-[90%] sm:h-24 fixed top-0 sm:top-4 lg:top-9 right-0 left-0 sm:rounded-3xl mx-auto z-50 md:px-5 px-5 lg:px-10 bg-secondary_deep/50
        backdrop-blur-[6px]">

        <div className='sm:hidden'>
         <HambergerMenu size="32" className='text-white cursor-pointer'/>
        </div>
        
      {/* Logo Section */}
      <div className="grow">
        <Link className='flex sm:flex-col items-center justify-center gap-2 sm:gap-0 text-3xl sm:text-xl text-primary ' href="/">
          <Logo className='w-16 h-16' />
          <h2 className='!font-MorabbaMedium'>توربوجـــــــــــت</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden w-full sm:flex items-center justify-center gap-4 lg:gap-8 text-lg lg:text-xl font-semibold">
        <Link href="/" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          صفحه اصلی
        </Link>
        <Link href="/shop" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          فروشگاه
        </Link>
        <Link href="/blog" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          بلاگ
        </Link>
        <Link href="/about" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          درباره ما
        </Link>
        <Link href="/contact" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          تماس با ما
        </Link>
        <Link href="/other" className="text-zinc-700 hover:font-DanaBold hover:scale-110 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
          دیگرشری
        </Link>
      </nav>

      {/* Icons and Authentication */}
      <div className="md:flex items-center space-x-6">
        <ToggleThemeComponent ref={ref} changeTheme={changeTheme} />
      </div>
    </header>
  );
};

export default HeaderComponent;
