import styles from './Footer.module.scss';
import MyIcon from '@component/MyIcon/MyIcon';

import whatsapp from '@icons/whatsapp_icon.svg';
import phone from '@icons/phone_icon.svg';
import message from '@icons/message_icon.svg';
import location from '@icons/location_icon.svg';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainBlock}>
                <a href='#header'>
                    <MyIcon name="logo" color="#E1EAFF" />
                </a>
                <p>центр тестирования и курс по подготовки к ЕНТ</p>
            </div>
            <div className={styles.contactBlock}>
                <p className={styles.title}>Связаться с нами</p>
                <ul>
                    <li><img src={whatsapp} /><a href="https://wa.me/77001400505" target="_blank" rel="noopener noreferrer">+7 (700) 140 05 05</a></li>
                    <li><img src={phone} /><a href="https://wa.me/77001400505" target="_blank" rel="noopener noreferrer">+7 (700) 140 05 05</a></li>
                    <li><img src={message} /><a href="mailto:info@ustudy.kz" target="_blank" rel="noopener noreferrer">info@ustudy.kz</a></li>
                    <li><img src={location} /><a href='https://2gis.kz/astana/inside/9570784863380030/firm/70000001080577352?m=71.422588%2C51.117236%2F17.01' target="_blank" rel="noopener noreferrer">г.Астана, ул.Алматы, 7, офис 804</a></li>
                </ul>
            </div>
            <div className={styles.informBlock}>
                <p className={styles.title}>Информация</p>
                <ul>
                    <li><a>Наши ценности</a></li>
                    <li><a>Курс</a></li>
                </ul>
            </div>
            <div className={styles.socialBlock}>
                <p className={styles.title}>Подписаться на нас</p>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ustudykazakhstan/" target="_blank" rel="noopener noreferrer">
                            <MyIcon name="instagram" color="#F0502D" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/s/ustudykz" target="_blank" rel="noopener noreferrer">
                            <MyIcon name="telegram" color="#F0502D" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCvLOF_D2SltBjCCqV4HpV9w" target="_blank" rel="noopener noreferrer">
                            <MyIcon name="youtube" color="#F0502D" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
