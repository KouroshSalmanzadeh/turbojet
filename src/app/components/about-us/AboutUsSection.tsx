import React from 'react'

import styles from "./aboutUsSection.module.css";

import AboutUsIcon from '@/assets/icons/AboutUsIcon';

import TitleBoldComponent from '@/utils/title bold/TitleBoldComponent';

import NextIcon from '@/assets/icons/languages/NextIcon';
import ReactIcon from '@/assets/icons/languages/ReactIcon';
import LaravelIcon from '@/assets/icons/languages/LaravelIcon';
import PhpIcon from '@/assets/icons/languages/PhpIcon';
import WordpressIcon from '@/assets/icons/languages/WordpressIcon';
import PwaIcon from '@/assets/icons/languages/PwaIcon';
import DjangoIcon from '@/assets/icons/languages/DockerIcon';
import NodeJsIcon from '@/assets/icons/languages/NodeJsIcon';
import FigmaIcon from '@/assets/icons/languages/FigmaIcon';
import WoocommerceIcon from '@/assets/icons/languages/WoocommerceIcon';

export default function AboutUsSection() {
  return (
    <div className={styles.about_us} id="about">
      <div className={styles.content}>
        <div className={styles.desc}>
          <TitleBoldComponent className='w-full text-center' title="درباره ما" />
          <p>
            هدف <b>توربوجت</b> کمک به کسب و کارها و توسعه آنها در فضای وب می‌باشد.

            توسعه کسب و کار و ایجاد وب سیات ها و اپلیکیشن های هوشمند، ضروری است
            و به راحتی و آسودگی شما و مدیریت کسب و کارتان کمک میکند

            با توجه به شرایط و نیاز جامعه، کسب و کارهایی که خودشون رو به روز نکنند
            و بخواهند به همان روش سنتی کالا یا خدماتشون رو بفروشند، نمیتوانند سهم بازار بالایی به دست بیاورند.
            ورود به بازار آنلاین وب تنها راه و آسان ترین گزینه برای گسترش بازار کار شماست.
          </p>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill_box}>
            <NextIcon />
          </div>
          <div className={styles.skill_box}>
            <ReactIcon />
          </div>
          <div className={styles.skill_box}>
            <LaravelIcon />
          </div>
          <div className={styles.skill_box}>
            <PhpIcon />
          </div>
          <div className={styles.skill_box}>
            <PwaIcon />
          </div>
          <div className={styles.skill_box}>
            <DjangoIcon />
          </div>
          <div className={styles.skill_box}>
            <NodeJsIcon />
          </div>
          <div className={styles.skill_box}>
            <WordpressIcon />
          </div>
          <div className={styles.skill_box}>
            <FigmaIcon />
          </div>
          <div className={styles.skill_box}>
            <WoocommerceIcon />
          </div>
        </div>
      </div>
      <div className={styles.imageParent}>
        <AboutUsIcon />
      </div>
      <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY"}></div>
      <div className={styles.grid_square}></div>
    </div>
  )
}
