import styles from "@/styles/Work.module.scss";
import Image from "next/image";

import roadmapLight from "../public/assets/images/roadmap-light.png";
import roadmapDark from "../public/assets/images/roadmap-dark.png";
import { useColorScheme } from "@/components/contexts/ColorSchemeContext";

export default function Home() {
    const { isDarkMode } = useColorScheme();

    return (
        <section id="work" className={styles.work_section}>
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
                    I&apos;m a software developer with a passion for blockchain
                    and a love for learning new technologies.
                </p>
                <p className={styles.content_body}>
                    I started out as a full-stack intern and worked my way up to
                    a full-time developer. After a year, I dove headfirst into
                    blockchain and joined a blockchain firm as a founding
                    member. I led all blockchain development and helped out with
                    web and cloud stuff too.
                </p>
                <p className={styles.content_body}>
                    When I&apos;m not coding, you can find me reading about the
                    latest blockchain trends or experimenting with new
                    programming languages.
                </p>
            </div>
        </section>
    );
}
