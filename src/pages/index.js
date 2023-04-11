import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({subsets: ["latin"]});

// разметка для домашней страницы
// индексовая страница =точка входа всегда экспортируется по дефолту!
const Home = () => (
    <div className={styles.wrapper}>
        <h1>Hello world</h1>
    </div>
);
export default Home;
