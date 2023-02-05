import Head from "next/head";
import styles from "@/styles/About.module.scss";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import hamburgerLight from "../public/assets/images/hamburger-light.svg";
import hamburgerDark from "../public/assets/images/hamburger-dark.svg";
import darkMode from "../public/assets/images/dark-mode.svg";
import lightMode from "../public/assets/images/light-mode.svg";
import roadmapLight from "../public/assets/images/roadmap-light.png";
import roadmapDark from "../public/assets/images/roadmap-dark.png";
import Link from "next/link";

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
                <meta
                    name="description"
                    content="Portofolio for Sarat Angajala"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar__main">
                <Link className="navbar__logo" href="/">
                    Sarat Angajala
                </Link>

                <ul className="navbar__navitems navbar__lg">
                    <li className="navbar__navitem">
                        <Link href="/work">Work</Link>
                    </li>
                    <li className="navbar__navitem">
                        <Link href="/contract">Contact</Link>
                    </li>
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
                <section id="about" className={styles.about_section}>
                    <div className={styles.left}>
                        {isDarkMode() ? (
                            <Image
                                src={roadmapDark}
                                alt="roadmap"
                                className={styles.roadmap_image}
                            />
                        ) : (
                            <Image
                                src={roadmapLight}
                                alt="roadmap"
                                className={styles.roadmap_image}
                            />
                        )}
                    </div>
                    <div className={styles.right}>
                        <h1 className={styles.content_header}>
                            Full Stack Developer / Blockchain Innovator
                        </h1>
                        <p className={styles.content_body}>
                            I&apos;m a software developer with a passion for
                            blockchain and a love for learning new technologies.
                        </p>
                        <p className={styles.content_body}>
                            I started out as a full-stack intern and worked my
                            way up to a full-time developer. After a year, I
                            dove headfirst into blockchain and joined a
                            blockchain firm as a founding member. I led all
                            blockchain development and helped out with web and
                            cloud stuff too.
                        </p>
                        <p className={styles.content_body}>
                            When I&apos;m not coding, you can find me reading about
                            the latest blockchain trends or experimenting with
                            new programming languages.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
