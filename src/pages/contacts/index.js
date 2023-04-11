import React from "react";
import Heading from "@/components/Headind";
import Head from "next/head";


// теперь при переходе на роут http://localhost:3000/contacts у нас отобразится общая страница контактов
const Contacts = () => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text={"Contacts list"}></Heading>
        </>

    );
};
export default Contacts;


