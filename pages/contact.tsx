import { useForm } from "react-hook-form";

import styles from "@/styles/Contact.module.scss";
import { useColorScheme } from "@/components/contexts/ColorSchemeContext";

const BEST_SHEET_URL =
    "https://sheet.best/api/sheets/5884d651-0242-4bb5-b682-29939f25fa48";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const { isDarkMode } = useColorScheme();

    const handleSendEmail = (data: any) => {
        fetch(BEST_SHEET_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <section id="contact" className={styles.contact_section}>
            <form
                onSubmit={handleSubmit(handleSendEmail)}
                className={styles.form_container}
            >
                <h1 className={styles.form_header}>
                    Please fill out the form below to ask any questions, inquire
                    about collaborations, or simply say hello.
                </h1>

                <div className={styles.horizontal_row}>
                    <label className={styles.form_input_label}>
                        First Name
                        <input
                            className={
                                isDarkMode()
                                    ? styles.form_input_half_dark
                                    : styles.form_input_half_light
                            }
                            {...register("first_name")}
                        />
                    </label>
                    <label className={styles.form_input_label}>
                        Last Name
                        <input
                            className={
                                isDarkMode()
                                    ? styles.form_input_half_dark
                                    : styles.form_input_half_light
                            }
                            {...register("last_name")}
                        />
                    </label>
                </div>
                <div className={styles.horizontal_row}>
                    <label className={styles.form_input_label}>
                        Email
                        <input
                            className={
                                isDarkMode()
                                    ? styles.form_input_dark
                                    : styles.form_input_light
                            }
                            {...register("email")}
                        />
                    </label>
                </div>
                <div className={styles.horizontal_row}>
                    <label className={styles.form_input_label}>
                        Message
                        <textarea
                            className={
                                isDarkMode()
                                    ? styles.form_input_dark
                                    : styles.form_input_light
                            }
                            {...register("message")}
                        />
                    </label>
                </div>
                <div className={styles.horizontal_row}>
                    <button
                        type="submit"
                        className={
                            isDarkMode()
                                ? styles.submit_btn_dark
                                : styles.submit_btn_light
                        }
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
