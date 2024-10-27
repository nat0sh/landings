import styles from './Subjects.module.scss'

import math from '@images/math.png'
import physics from '@images/physics.png'
import history from '@images/history.png'
import math_literacy from '@images/math_literacy.png'
import read_literacy from '@images/read_literacy.png'

function Subjects() {
    return (
        <div className={styles.subjects}>
            <div className={styles.informBlock}>
                <h2>Получи свой грант за 8 месяцев!</h2>
                <p>пройди курс с U-study по основным и профильным предметам</p>
            </div>
            <div className={styles.subjectBlock}>
                <p className={styles.subjectTitle}>Математика</p>
                <img className={styles.subjectImg} src={math}/>
            </div>
            <div className={styles.subjectBlock}>
                <p className={styles.subjectTitle}>Физика</p>
                <img className={styles.subjectImg} src={physics}/>
            </div>
            <div className={styles.subjectBlock}>
                <p className={styles.subjectTitle}>История Казахстана</p>
                <img className={styles.subjectImg} src={history}/>
            </div>
            <div className={styles.subjectBlock}>
                <p className={styles.subjectTitle}>Математическая грамотность</p>
                <img className={styles.subjectImg} src={math_literacy}/>
            </div>
            <div className={styles.subjectBlock}>
                <p className={styles.subjectTitle}>Грамотность чтения</p>
                <img className={styles.subjectImg} src={read_literacy}/>
            </div>
        </div>
    )
}

export default Subjects;