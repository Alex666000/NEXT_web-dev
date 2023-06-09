import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Heading from "@/components/Headind";

export const getStaticProps = async () => {
    const response = await fetch(`http://localhost:3000/api/socials`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { socials: data },
    }
};

function Socials(props) {
    return null;
}

const Home = ({ socials }) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Next.js Application" />
        {/*компонент который отрисует список делаем*/}
        <Socials socials={socials} />
    </div>
);

export default Home;
