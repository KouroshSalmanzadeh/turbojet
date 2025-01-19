"use client";

import React, { useState } from "react";
import styles from "./FaqTheme.module.css";
import { ArrowLeft2, ArrowDown2 } from "iconsax-react";

interface FaqComponentProps {
  question: string;
  answer: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleFaq = () => setIsOpen(!isOpen); 

  return (
    <div className={`${styles.faq_card}`} onClick={toggleFaq}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{question}</h3>
        {isOpen ? (
          <ArrowDown2 size="32" className="transition-transform text-secondary_light" />
        ) : (
          <ArrowLeft2 size="32" className="transition-transform text-secondary_light" />
        )}
      </div>
      <p className={`mt-2 transition-all ${isOpen ? "block" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
};

export default FaqComponent;
