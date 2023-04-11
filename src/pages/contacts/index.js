import Head from "next/head";
import Heading from "@/components/Headind";


//наше приложение осуществляет теперь запрос за данными прямо на сервере и возвращает нам полностью готовую разметку
//
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await response.json();
    const data = null;

    // когда работаем с сервер данные могут не прийти - делаем проверку
    if (!data) {
        return {
            // если  данные не существуют вернем спец.объект который перехватывается и обрабатывается в Next
            // в этом случае вернется 404 ошибка и соответствующая страница
            // так мы обработали ошибку асинхронного запроса
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
};

const Contacts = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list:" />
            <ul>
                {contacts && contacts.map(({ id, name, email }) => (
                    <li key={id}><strong>{name}</strong> ({email})</li>
                ))}
            </ul>
        </>
    );
};

export default Contacts;
