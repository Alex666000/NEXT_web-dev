import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import "src/styles/globals.scss";
import youtubeImg from '../../public/youtube.png';
import Image from "next/image";
import Head from "next/head";

// теперь основной макет Арр находится внутри Лейаут
const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            {/*подключили шрифт старым способом*/}
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Component {...pageProps} />;
            </main>
            <Image
            src={youtubeImg}
            width={500}
            height={350}
            alt={'preview'}
            placeholder={'blur'}
            />
        </Layout>);
};
export default MyApp;
