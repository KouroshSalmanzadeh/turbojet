"use client"

import React, { useState, useEffect } from 'react'
import styles from "./howToWork.module.css";

import TitleBoldComponent from '@/utils/title bold/TitleBoldComponent';
import CallIcon from '@/assets/icons/CallIcon';
import OrderSuccessIcon from '@/assets/icons/OrderSuccessIcon';
import ProgressRate from '@/assets/icons/ProgressRate';
import PreviewIcon from '@/assets/icons/PreviewIcon';
import SupportIcon from '@/assets/icons/SupportIcon';

export default function HowToWorkSection() {
    const [numberImage, setNumberImage] = useState<number>(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumberImage((prevNumber) => {
                const newNumber = prevNumber === 5 ? 1 : prevNumber + 1;
                return newNumber;
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const itemText = document.getElementById(numberImage.toString());
        if (itemText) {
            document.querySelector(`.${styles.active_element}`)?.classList.remove(styles.active_element);
            itemText.classList.add(styles.active_element);
        }

        const lastImg = document.querySelector(`.${styles.containerImages}`);
        if (lastImg) {
            switch (numberImage) {
                case 1:
                    lastImg.className = `${styles.containerImages} ${styles.transform_1}`;
                    break;
                case 2:
                    lastImg.className = `${styles.containerImages} ${styles.transform_2}`;
                    break;
                case 3:
                    lastImg.className = `${styles.containerImages} ${styles.transform_3}`;
                    break;
                case 4:
                    lastImg.className = `${styles.containerImages} ${styles.transform_4}`;
                    break;
                case 5:
                    lastImg.className = `${styles.containerImages} ${styles.transform_5}`;
                    break;
                default:
                    lastImg.className = `${styles.containerImages} ${styles.transform_1}`;
                    break;
            }
        }
    }, [numberImage]);

    const handleSetNewNumber = (event: React.MouseEvent): void => {
        const itemText = event.currentTarget as HTMLElement;
        const newNumber = Number(itemText.id);

        if (newNumber === numberImage) return;

        setNumberImage(newNumber);
    };

    return (
        <div className={styles.how_to_work}>
            <TitleBoldComponent className='w-full text-right -mb-20' title='قدم به قدم با توربوجت' />
            <div className={styles.content}>
                <div className={styles.text_selector}>
                    <div onClick={handleSetNewNumber} className={styles.active_element} id='1'>
                        <div className={styles.text_desc}>
                            <strong>مشاوره رایگان</strong>
                            <p>با استفاده از مشاوره رایگان ما، نیاز خود را بهتر بشناسید.</p>
                        </div>
                        <span>1</span>
                    </div>
                    <div onClick={handleSetNewNumber} id='2'>
                        <div className={styles.text_desc}>
                            <strong>ثبت سفارش</strong>
                            <p>سفارش خود را به راحتی با چند کلیک مشخص  کرده و ثبت کنید</p>
                        </div>
                        <span>2</span>
                    </div>
                    <div onClick={handleSetNewNumber} id='3'>
                        <div className={styles.text_desc}>
                            <strong>پیگیری لحظه ای</strong>
                            <p>در تمام لحظات ساخت پروژه تان در گزارش دقیق پنل خود، از جزئیات با خبر شوید</p>
                        </div>
                        <span>3</span>
                    </div>
                    <div onClick={handleSetNewNumber} id='4'>
                        <div className={styles.text_desc}>
                            <strong>پیش نمایش پروژه</strong>
                            <p>پیش نمایش پروژه قبل از تحویل برای تست نهایی و جلب رضایت شما</p>
                        </div>
                        <span>4</span>
                    </div>
                    <div onClick={handleSetNewNumber} id='5'>
                        <div className={styles.text_desc}>
                            <strong>تحویل و پشتیبانی</strong>
                            <p>تحویل پروژه تان و پشتیبانی بلند مدت و سریع در تمامی لحظات!</p>
                        </div>
                        <span>5</span>
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.containerImages}>
                        <div id='img-1'><CallIcon /></div>
                        <div id='img-2'><OrderSuccessIcon /></div>
                        <div id='img-3'><ProgressRate /></div>
                        <div id='img-4'><PreviewIcon /></div>
                        <div id='img-5'><SupportIcon /></div>
                    </div>
                </div>
                <div aria-hidden className={styles.gradient_circle_animate + " animate-transformY"}></div>
                <div className={styles.grid_square}></div>
            </div>
        </div>
    )
}