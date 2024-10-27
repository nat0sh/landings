import React from 'react';
import styles from './Program.module.scss';

import smart_girl from '@images/smart_girl.png';
import guy from '@images/guy.png';
import woman_tablet from '@images/woman_tablet.png';

function Program() {
    return (
        <div className={styles.program}>
            <div className={styles.programBlocks}>
                <div className={styles.bigBlock}>
                    <h2>4 простых шага к успешной сдаче ЕНТ</h2>
                    <img src={smart_girl} />
                </div>
                <div className={styles.smallBlocks}>
                    <div className={styles.smallBlock} id={styles.block1}>
                        <div className={styles.blockTitle}>
                            <h1>1</h1>
                            <p>Оставить заявку на сайте</p>
                        </div>
                        <img src={guy}/>
                    </div>
                    <div className={styles.smallBlock} id={styles.block2}>
                        <div className={styles.blockTitle}>
                            <h1>2</h1>
                            <p>Пройти тестирование</p>
                        </div>
                    </div>
                    <div className={styles.smallBlock} id={styles.block3}>
                        <div className={styles.blockTitle}>
                            <h1>3</h1>
                            <p>Посетить пробное занятие БЕСПЛАТНО</p>
                        </div>
                    </div>
                    <div className={styles.smallBlock} id={styles.block4}>
                        <div className={styles.blockTitle}>
                            <h1>4</h1>
                            <p>Начать обучение</p>
                        </div>
                        <img src={woman_tablet}/>
                    </div>
                </div>
            </div>
            <div className={styles.buttonBlock}>
                <a href="https://wa.me/77001400505?text=Здравствуйте! Хочу записаться на курс" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className={styles.mainButton}>
                        Записаться
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Program;
