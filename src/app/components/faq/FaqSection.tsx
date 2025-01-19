import React from 'react';

import styles from './FaqSection.module.css';

import TitleBoldComponent from '@/utils/title bold/TitleBoldComponent';
import FaqComponent from '@/components/faq/FaqComponent';

import { faqData } from './faqData';

export default function FaqSection() {
    return (
        <div className={styles.faq}>
            <TitleBoldComponent title='سوالات رایج' className='w-full text-center' />
            <p className='text-center mt-8'>
                پاسخ پرسش هایی که دربارۀ توربوجت و خدمات طراحی سایت داشته باشید
            </p>
            <div className="mt-8 w-full">
                {faqData.map((faq, index) => (
                    <FaqComponent key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className={styles.grid_square}></div>
        </div>
    )
}
