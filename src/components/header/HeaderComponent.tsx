"use client";

import React, { useRef, useState } from 'react';
import styles from "./header.module.css";
import Link from 'next/link';
import { flushSync } from 'react-dom';
import Logo from '@/assets/logo/Logo';
import ToggleThemeComponent from '../ToggleTheme/ToggleThemeComponent';
import { HambergerMenu } from 'iconsax-react';
import Sidebar from '../sidbar/SidebarComponent';

const HeaderComponent: React.FC = () => {
  const ref = useRef<HTMLLabelElement>(null);
  const [theme, setTheme] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeTheme = async () => {
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
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
        } else {
          setTheme(!theme);
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      });
    }).ready;

    if (ref.current) {
      const parent = ref.current;
      if (!parent) return;
      const { top, left, width, height } = parent.getBoundingClientRect();
      const centerX = left + width - 25;
      const centerY = top + height - 25;
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
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className={"h-screen flex-center flex-col text-2xl font-semibold child:w-full child:text-center"}>
          <li className='child:hover:bg-secondary_light/10 child:hover:scale-110 child:hover:text-primary child:px-2 child:py-4 child:rounded-xl child:transition-all child:block'><Link href={"/#"}>طراحی سایت</Link></li>
          <li className='child:hover:bg-secondary_light/10 child:hover:scale-110 child:hover:text-primary child:px-2 child:py-4 child:rounded-xl child:transition-all child:block'><Link href={"/#"}>طراحی اپلیکیشن</Link></li>
          <li className='child:hover:bg-secondary_light/10 child:hover:scale-110 child:hover:text-primary child:px-2 child:py-4 child:rounded-xl child:transition-all child:block'><Link href={"/#"}>افزایش سرعت سایت</Link></li>
          <li className='child:hover:bg-secondary_light/10 child:hover:scale-110 child:hover:text-primary child:px-2 child:py-4 child:rounded-xl child:transition-all child:block'><Link href={"/#"}>پنل پیامکی</Link></li>
        </ul>
      </Sidebar>
      
      <header className={styles.header}>
        {/* منوی موبایل */}
        <div className={styles.mobile_menu}>
          <HambergerMenu size="32" onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* لوگو */}
        <div className={styles.logo}>
          <Link className={styles.link} href="/">
            <Logo className={styles.img_logo} />
            <h2>توربوجـــــــــــت</h2>
          </Link>
        </div>

        {/* منوی ناوبری */}
        <nav className={styles.nav_menu}>
          <Link href="/">صفحه اصلی</Link>
          <span className='group'>
            <Link href="#service">خدمات</Link>
            <ul className={styles.dropdown + " opacity-0 invisible group-hover:opacity-100 "}>
              <li><Link href={"/#"}>طراحی سایت</Link></li>
              <li><Link href={"/#"}>طراحی اپلیکیشن</Link></li>
              <li><Link href={"/#"}>افزایش سرعت سایت</Link></li>
              <li><Link href={"/#"}>پنل پیامکی</Link></li>
            </ul>
          </span>
          <Link href="#">بلاگ</Link>
          <Link href="#about">درباره ما</Link>
          <Link href="#contact">تماس با ما</Link>
        </nav>

        {/* تغییر تم */}
        <div className={styles.toggle_theme}>
          <ToggleThemeComponent ref={ref} changeTheme={changeTheme} />
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;