import styles from "./Program.module.scss"
import schoolgirl from "@images/schoolgirl.png"
import laptop from "@images/laptop.png"
import check from "@icons/check_icon.svg"

function Program() {
    return (
        <div className={styles.program}>
            <div className={styles.imageBlock}>
                <div className={styles.banner}>
                    <img src={schoolgirl} />
                </div>
                <img src={laptop} className={styles.imgLaptop}/>
            </div>
            <div className={styles.contentBlock}>
                <h2>Что включено в КУРС обучение ?</h2>
                <div className={styles.item} id={styles.item1}>
                    <img src={check} />
                    <p>Полное объяснение тем, которые встречаются на ЕНТ, от базовых до самых сложных.</p>
                </div>
                <div className={styles.item} id={styles.item2}>
                    <img src={check} />
                    <p>Решение типовых задач, которые часто встречаются на экзамене, с разбором сложных и нестандартных случаев.</p>
                </div>
                <div className={styles.item} id={styles.item3}>
                    <img src={check} />
                    <p>Регулярные контрольные и пробные тесты помогут оценить уровень подготовки и устранить пробелы в знаниях.</p>
                </div>
            </div>
        </div>
    )
}

export default Program;