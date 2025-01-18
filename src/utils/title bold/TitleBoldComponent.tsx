import React from 'react'

import styles from "./titleBold.module.css";

type Props = {
    title: string;
    className?: string;
}

export default function TitleBoldComponent({title, className}: Props) {
  return (
    <div className={styles.title + ` ${className}`}>{title}</div>
  )
}
