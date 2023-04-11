import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

// так как в крупных проектах навигация может быть очень большая сделаем улучшение её
const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contacts"},
];

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                webDev
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}><a>{title}</a></Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;