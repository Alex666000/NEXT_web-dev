import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// глобальный компонент Лайаут - макет всего Арр
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;

/*
-- В КАЖДУЮ СТРАНИЦУ ИМПОРТИРОВАТЬ КОМПОНЕНТЫ ЭТИ ПОСЛЕ ЧЕГО ДОБАВИТЬ В РАЗМЕТКУ
ДУБЛИРОВАНИЕ КОДА  И ДОЛГО ПОДКЛЮЧАТЬ НА КАЖДУЮ страницу
-- делаем  общии компонент разметки и внутри него создаем глобальный компонент Лайаут Layout и внутрь него
создать глобальный  компонент лайаут который и будет оборачивать все страницы
 */