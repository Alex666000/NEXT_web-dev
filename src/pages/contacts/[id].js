import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";


// getServerSideProps - используется при SSR подходе getPath не нужен
export const getServerSideProps = async (context) => {
    // console.log(context);

    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
    }
};

const Contact = ({ contact }) => (
    <>
        <Head>
            <title>Contact page</title>
        </Head>
        <ContactInfo contact={contact} />
    </>
);

export default Contact;
