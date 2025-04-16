"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./nav.module.css";

export function NavLinks() {
  const pathname = usePathname();
  const cleanPaths = ["/", "/english", "/deutsch"];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.navMobileOpen : ""} ${
        cleanPaths.includes(pathname) ? styles.headerClean : ""
      }`}
      data-scroll={scrollPosition}
    >
      <Link
        className={`link ${pathname === "/about" ? styles.active : ""}`}
        href="/"
        onClick={() => setIsOpen(false)}
      >
        <Image src="/logo.png" width={120} height={64} alt="Ungurmuiža" />
      </Link>
      <div className={styles.navigationWrapper}>
        <nav>
          <ul>
            <li>
              <Link
                className={`link ${pathname === "/" ? styles.active : ""}`}
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Sākums
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/par-mums" ? styles.active : ""
                }`}
                href="/par-mums"
                onClick={() => setIsOpen(false)}
              >
                Par mums
              </Link>
            </li>
            {/* <li>
              <Link
                className={`link ${pathname === "/cenas" ? styles.active : ""}`}
                href="/cenas"
                onClick={() => setIsOpen(false)}
              >
                Cenas
              </Link>
            </li> */}
            <li>
              <Link
                className={`link ${
                  pathname === "/galerija" ? styles.active : ""
                }`}
                href="/galerija"
                onClick={() => setIsOpen(false)}
              >
                Galerija
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/restorans" ? styles.active : ""
                }`}
                href="/restorans"
                onClick={() => setIsOpen(false)}
              >
                Restorāns
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/kontakti" ? styles.active : ""
                }`}
                href="/kontakti"
                onClick={() => setIsOpen(false)}
              >
                Kontakti
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link
                className={`link ${
                  pathname === "/english" ? styles.active : ""
                }`}
                href="/english"
                onClick={() => setIsOpen(false)}
              >
                English
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/deutsch" ? styles.active : ""
                }`}
                href="/deutsch"
                onClick={() => setIsOpen(false)}
              >
                Deutsch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`${styles.line} ${isOpen ? styles.open : ""} ${
            styles.line1
          }`}
        ></span>
        <span
          className={`${styles.line} ${isOpen ? styles.open : ""} ${
            styles.line2
          }`}
        ></span>
        <span
          className={`${styles.line} ${isOpen ? styles.open : ""} ${
            styles.line3
          }`}
        ></span>
      </div>
    </header>
  );
}
