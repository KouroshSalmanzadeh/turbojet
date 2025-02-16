import React from 'react'

import styles from "./titleBold.module.css";

type Props = {
    title: string;
    className?: string;
}

export default function TitleBoldComponent({title, className}: Props) {
  return (
    <h3 className={styles.title + ` ${className}`}>{title}</h3>
  )
}
