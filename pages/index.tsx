import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import headshot from "../public/assets/images/headshot.png"
import hamburgerLight from "../public/assets/images/hamburger-light.svg"
import hamburgerDark from "../public/assets/images/hamburger-dark.svg"
import darkMode from "../public/assets/images/dark-mode.svg"
import lightMode from "../public/assets/images/light-mode.svg"
import githubLight from "../public/assets/images/github-light.svg"
import githubDark from "../public/assets/images/github-dark.svg"
import linkedinLight from "../public/assets/images/linkedin-light.svg"
import linkedinDark from "../public/assets/images/linkedin-dark.svg"

export default function Home() {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (!bodyElement) return;

    if (colorScheme === "dark") {
      bodyElement.classList.remove("light");
      bodyElement.classList.add("dark");
    } else if (colorScheme === "light") {
      bodyElement.classList.remove("dark");
      bodyElement.classList.add("light");
    }
  }, [colorScheme]);

  const isDarkMode = useCallback(
    (): boolean => colorScheme === "dark",
    [colorScheme]
  );

  return (
    <>
      <Head>
        <title>Sarat Angajala - Portofolio</title>
        <meta name="description" content="Portofolio for Sarat Angajala" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar__main">
        <p className="navbar__logo">Sarat Angajala</p>

        <ul className="navbar__navitems navbar__lg">
          <li className="navbar__navitem">About</li>
          <li className="navbar__navitem">Work</li>
          <li className="navbar__navitem">Contact</li>
          <li className="navbar__navitem navbar__switcher">
            {isDarkMode() ? (
              <Image
                onClick={() => setColorScheme("light")}
                src={lightMode}
                alt="light-mode"
                width={24}
                height={24}
              />
            ) : (
              <Image
                onClick={() => setColorScheme("dark")}
                src={darkMode}
                alt="dark-mode"
                width={24}
                height={24}
              />
            )}
          </li>
        </ul>
        <ul className="navbar__navitems navbar__sm">
          <li className="navbar__navitem">
            {isDarkMode() ? (
              <Image
                onClick={() => setColorScheme("light")}
                src={lightMode}
                alt="light-mode"
                width={24}
                height={24}
              />
            ) : (
              <Image
                onClick={() => setColorScheme("dark")}
                src={darkMode}
                alt="dark-mode"
                width={24}
                height={24}
              />
            )}
          </li>
          <li className="navbar__navitem navbar__switcher">
            {isDarkMode() ? (
              <Image
                onClick={() => setColorScheme("light")}
                src={hamburgerLight}
                alt="hamburger"
                width={24}
                height={24}
              />
            ) : (
              <Image
                onClick={() => setColorScheme("dark")}
                src={hamburgerDark}
                alt="hamburger"
                width={24}
                height={24}
              />
            )}
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section id="hero" className={styles.hero_section}>
          <div className={styles.left_section}>
            <p className={styles.intro}>
              Hi, I&apos;m{" "}
              <strong className={styles.name}>Sarat Angajala</strong>
            </p>
            <p className={styles.description}>
              I&apos;m an experienced web3 developer and full stack engineer
              with a strong background in blockchain technology and a passion
              for building decentralized applications.
            </p>
          </div>
          <div className={styles.right_section}>
            <Image
              className={styles.headshot}
              src={headshot}
              alt="headshot"
            />

            {isDarkMode() ? (
              <div className={styles.socials}>
                <a
                  href="https://github.com/SaratAngajalaoffl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={githubDark}
                    alt="github"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/saratangajala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedinDark}
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            ) : (
              <div className={styles.socials}>
                <a
                  href="https://github.com/SaratAngajalaoffl"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={githubLight}
                    alt="github"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/saratangajala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedinLight}
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
