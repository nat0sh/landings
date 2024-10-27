import styles from './TargetAudience.module.scss'

import man from '@images/man-using-external-storage-used.png'
import elipse from '@icons/elipse.svg'
import question from '@icons/question.svg'

function TargetAudience() {
    return (
        <div className={styles.targetAudience}>
            <h2>Ustudy- поможет тебе, если ТЫ</h2>
            <img className={styles.img_man} src={man} />
            <img className={styles.img_question} src={question} />
            <div className={styles.blueBlock}>
                <ul>
                    <li><img src={elipse} className={styles.elipse}/><p>Хочешь поступить на грант</p></li>
                    <li className={styles.li_other}><img src={elipse} className={styles.elipse}/><p>Имеешь низкий уровень знаний по<br /> физике и математике</p></li>
                    <li><img src={elipse} className={styles.elipse}/><p>Не уверен в своих знаниях</p></li>
                    <li><img src={elipse} className={styles.elipse}/><p>Школьная программа для тебя малоэффективна</p></li>
                </ul>
            </div>
        </div>
    )
}
export default TargetAudience;