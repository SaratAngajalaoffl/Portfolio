import styles from "@/styles/Home.module.scss";
import Image from "next/image";

import headshot from "../public/assets/images/headshot.png";
import githubLight from "../public/assets/images/github-light.svg";
import githubDark from "../public/assets/images/github-dark.svg";
import linkedinLight from "../public/assets/images/linkedin-light.svg";
import linkedinDark from "../public/assets/images/linkedin-dark.svg";
import { useColorScheme } from "@/components/contexts/ColorSchemeContext";

export default function Home() {
    const { isDarkMode } = useColorScheme();

    return (
        <section id="hero" className={styles.hero_section}>
            <div className={styles.left_section}>
                <p className={styles.intro}>
                    Hi, I&apos;m{" "}
                    <strong className={styles.name}>Sarat Angajala</strong>
                </p>
                <p className={styles.description}>
                    I&apos;m an experienced web3 developer and full stack
                    engineer with a strong background in blockchain technology
                    and a passion for building decentralized applications.
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
    );
}
