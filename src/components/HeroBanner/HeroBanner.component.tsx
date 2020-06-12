import styles from './HeroBanner.module.scss';
import { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/core';

export default function HeroBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.shadow} />
      <Image src="/download.png" h="100%" w="100%" />
      <section className={styles.header}>
        <h1>Read, Write, Discuss, and Be Known</h1>
      </section>
    </section>
  );
}
