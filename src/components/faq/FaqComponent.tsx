"use client";

import React, { useState } from "react";
import styles from "./FaqTheme.module.css";
import { ArrowLeft2 } from "iconsax-react";

interface FaqComponentProps {
  question: string;
  answer: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${styles.faq_card} ${isOpen ? styles.open : ""}`}
      onClick={toggleFaq}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-2xl font-bold">{question}</h3>
          <ArrowLeft2 size="32" className={`transition-all text-secondary_light ${isOpen ? "-rotate-90" : ""}`} />
      </div>
      <div className={`${styles.answer} ${isOpen ? styles.answer_open : ""}`}>
        <p className="text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

export default FaqComponent;