import styles from "./Banner.module.scss";
import woman from "@images/front-view-beautiful-smiling-woman.png";
import Features from "@components/Features/Features";


function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.main}>
                <div className={styles.main_left}>
                    <h1>Готовься к ЕНТ с Ustudy — за 16 600 тенге в месяц</h1>
                    <p>
                        Комплексные курсы подготовят к ЕНТ по профильным предметам
                        математике и физике
                    </p>
                    <a href="https://wa.me/77001400505?text=Здравствуйте! Хочу записаться на курс" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.mainButton}>
                            Записаться на курс
                        </button>
                    </a>
                </div>
                <div className={styles.main_right}>
                    <img src={woman} />
                </div>
            </div>
            <Features />
        </div>
    );
}

export default Banner;
