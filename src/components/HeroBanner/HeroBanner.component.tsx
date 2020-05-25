import styles from "./HeroBanner.module.scss";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [offset, setOffset] = useState(-50);

  useEffect(() => {
    window.addEventListener("scroll", parallaxShift);
    return () => {
      window.removeEventListener("scroll", parallaxShift);
    };
  }, []);

  const parallaxShift = () => {
    setOffset(window.pageYOffset - 50);
  };

  return (
    <header
      className={styles.headerBackground}
      style={{ backgroundPositionY: offset }}
    >
      <section className={styles.header} style={{ bottom: (offset - 50) / 2 }}>
        <h1>Read, Write, Discuss, and Be Known</h1>
      </section>
    </header>
  );
}
