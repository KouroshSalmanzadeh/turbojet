import React from 'react'

import styles from './FaqTheme.module.css';

import { ArrowLeft2 } from "iconsax-react";


interface FaqComponentProps {
    question: string;
    answer: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ question, answer }) => {
    return (
        <div className={styles.faq_card}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{question}</h3>
                <ArrowLeft2 size="32"/>
            </div>
            <p className="mt-2">{answer}</p>
        </div>
    );
};

export default FaqComponent;
