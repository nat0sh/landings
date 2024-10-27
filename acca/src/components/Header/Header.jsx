import React from "react";
import styles from "./Header.module.scss"
import logo from '@images/UStudy_Logotype_color.png';

function Header() {
    return (
        <header className={styles.header} id="header">
            <img src={logo} alt="Ustudy logo" className={styles.logo} />
            <nav>
                <ul className={styles.navList}>                   
                    <li className={styles.navItem}><a>Курс</a></li>
                    <li className={styles.navItem}><a>Преимущества курса</a></li>
                    <li className={styles.navItem}><a>Контакты</a></li>
                </ul>
            </nav>
            <a href="https://wa.me/77001400505?text=Здравствуйте! Хочу записаться на курс" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className={styles.mainButton}>
                    Связаться с нами
                </button>
            </a>
        </header>
    )
}

export default Header;