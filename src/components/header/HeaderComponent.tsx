"use client"

import React, { useRef, useState } from 'react';

import styles from "./header.module.css";

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
    <header className={styles.header}>

      <div className={styles.mobile_menu}>
        <HambergerMenu size="32" />
      </div>

      {/* Logo Section */}
      <div className={styles.logo}>
        <Link className={styles.link} href="/">
          <Logo className={styles.img_logo} />
          <h2>توربوجـــــــــــت</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav_menu}>
        <Link href="/">
          صفحه اصلی
        </Link>
        <span className='group'>
          <Link href="/services">
            خدمات
          </Link>
          <ul className={styles.dropdown + " opacity-0 invisible group-hover:opacity-100 group-hover:visible"}>
            <li>
              <Link href={"/services/website"}>طراحی سایت</Link>
            </li>
            <li>
              <Link href={"/services/app"}>طراحی اپلیکیشن</Link>
            </li>
            <li>
              <Link href={"/services/site-speed"}>افزایش سرعت سایت</Link>
            </li>
            <li>
              <Link href={"/services/sms-panel"}>پنل پیامکی</Link>
            </li>
          </ul>
        </span>
        <Link href="/blog">
          بلاگ
        </Link>
        <Link href="/about">
          درباره ما
        </Link>
        <Link href="/contact">
          تماس با ما
        </Link>
      </nav>

      {/* Toggle theme */}
      <div className={styles.toggle_theme}>
        <ToggleThemeComponent ref={ref} changeTheme={changeTheme} />
      </div>
    </header>
  );
};

export default HeaderComponent;
