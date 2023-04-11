// импорт react не требуется в нексте
import React from "react";

const Heading = ({tag, text}) => {
    // если тег не задан то будет заголовок
    const Tag = tag || "h1";

// возвращаем текст обернутый в передаваемый заголовок тег...
    return (
        <Tag>
            {text}
        </Tag>
    );
};

export default Heading;
/*
везде по коду во всех компонентах - заменяем h1 на Heading
 */