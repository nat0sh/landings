import styles from "./Banner.module.scss"
import woman from "@images/woman.png"

function Banner({ onOpenModal }) {
    return (
        <div className={styles.banner}>
            <div className={styles.mainBlock}>
                <div className={styles.textBlock}>
                    <h1 className={styles.mainTitle}>Преуспей в сдаче ЕНТ вместе с Ustudy за <span>8 месяцев</span></h1>
                    <p className={styles.mainText}>Комплексные курсы подготовят к ЕНТ по профильным предметам  математике и физике</p>
                    <a href="https://wa.me/77001400505?text=Здравствуйте! Хочу записаться на курс" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.mainButton}>
                            Записаться на курс
                        </button>
                    </a>
                </div>
                <div className={styles.imageBlock}>
                    <img src={woman} />
                </div>
            </div>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles.redBar}></div>
                    <div>
                        <h1>10 тыс</h1>
                        <p>учеников по всему Казахстану</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <div className={styles.redBar}></div>
                    <div>
                        <h1>7 тыс</h1>
                        <p>обладателей грантов</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <div className={styles.redBar}></div>
                    <div>
                        <h1>110</h1>
                        <p>средний балл</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;