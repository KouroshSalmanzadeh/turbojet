import React from 'react'

import styles from "./footer.module.css";

import Link from 'next/link';

import { Call, Link1, Location, Sms } from 'iconsax-react';

import enamad from '@/assets/images/E_namad.png';
import sabt from '@/assets/images/Sabt_melli.png';

import Image from 'next/image';

export default function FooterComponent() {
    return (
        <div className={styles.footer}>
            <div className={styles.fade + " hidden lg:block"}></div>
            <div className={styles.animate + " hidden lg:block lg:animate-grid-runner"}></div>
            <div className={styles.content}>
                <div className={styles.container_contnet}>
                    <div className={styles.quick_access}>
                        <span className={styles.title}>دسترسی سریع</span>
                        <div>
                            <ul>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        صفحه اصلی
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        خدمات
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        بلاگ
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        درباره ما
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        طراحی سایت
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        طراحی اپلیکیشن
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        افزایش سرعت سایت
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <Link1 size="32" />
                                        پنل پیامکی
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.contact_us}>
                        <span className={styles.title}>ارتباط با ما</span>
                        <div>
                            <div className={styles.box}>
                                <Location size="30" />
                                <span>مشهد، پاستور 20 و پلاک 144</span>
                            </div>
                            <div className={styles.box}>
                                <Call size="30" />
                                <a className={styles.tell} href="tel:+989923120730">09923120730</a>
                                <a className={styles.tell} href="tel:+989152363485">09152363485</a>
                                <a className={styles.tell} href="tel:+989392330297">09392330297</a>
                            </div>
                            <div className={styles.box}>
                                <Sms size="30" />
                                <a href="mailto:kouroshsalmanzadeh@gmail.com">turbojetweb@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <span className={styles.title}>نشان های توربوجت</span>
                        <div>
                            <Image src={enamad} alt='نشان ای نماد توربوجت' />
                            <Image src={sabt} alt='نشان ثبت ملی توربوجت' />
                        </div>
                    </div>
                </div>
            </div>
                <div className={styles.copy_right}>
                تمامی حقوق مادی و معنوی این وب‌سایت متعلق به <b>توربوجت</b> می‌باشد و هر گونه کپی برداری پیگرد قانونی دارد.
                </div>
            <div className={styles.grid_animate_mobile}>
                <div className={styles.fade + " lg:hidden"}></div>
                <div className={styles.animate + " animate-grid-runner lg:hidden"}></div>
            </div>
        </div>
    )
}
