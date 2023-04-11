import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import "src/styles/globals.scss";

// теперь основной макет Арр находится внутри Лейаут
const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps} />;
        </Layout>);
};
export default MyApp;
