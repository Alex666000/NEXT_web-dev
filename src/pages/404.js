import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/404.module.scss";
import Heading from "@/components/Headind";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // путь до главной страницы
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <Heading text="404" />
                <Heading tag="h2" text="Something is going wrong..." />
            </div>
        </div>
    )
};

export default Error;

/*
Логика: вводим не сущестующий роут ждет 3 сек. и редиректит на главную
 */
