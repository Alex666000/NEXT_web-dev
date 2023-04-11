import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import "src/styles/globals.scss";
import youtubeImg from '../../public/youtube.png';
import Image from "next/image";

// теперь основной макет Арр находится внутри Лейаут
const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
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
