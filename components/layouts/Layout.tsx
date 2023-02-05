import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import hamburgerLight from "../../public/assets/images/hamburger-light.svg";
import hamburgerDark from "../../public/assets/images/hamburger-dark.svg";
import darkMode from "../../public/assets/images/dark-mode.svg";
import lightMode from "../../public/assets/images/light-mode.svg";
import { useColorScheme } from "../contexts/ColorSchemeContext";

const Layout = ({ children }: { children: React.ReactElement }) => {
    const { isDarkMode, setColorScheme } = useColorScheme();

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
                        <Link href="/contact">Contact</Link>
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
            <main>{children}</main>
        </>
    );
};

export default Layout;
