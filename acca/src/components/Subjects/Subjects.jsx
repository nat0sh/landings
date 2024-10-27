import styles from './Subjects.module.scss'

import math from '@images/math.png'
import physics from '@images/physics.png'
import history from '@images/history.png'
import math_literacy from '@images/math_literacy.png'
import read_literacy from '@images/read_literacy.png'
import girl_lamp from '@images/girl_lamp.png'

function Subjects() {
    return (
        <div className={styles.subjects}>
            <h2>Начните готовиться уже сегодня за <span>16 600 тенге в месяц</span></h2>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <img src={girl_lamp} />
                </div>
                <div className={styles.subjectBlock}>
                    <div className={styles.subject} style={{borderColor: '#3B46E0'}}>
                        <p className={styles.subjectTitle}>Математика</p>
                        <img className={styles.subjectImg} src={math}/>
                    </div>
                    <div className={styles.subject} style={{borderColor: '#F0502D'}}>
                        <p className={styles.subjectTitle}>Физика</p>
                        <img className={styles.subjectImg} src={physics}/>
                    </div>
                    <div className={styles.subject} style={{borderColor: 'rgba(59, 70, 224, 0.49)'}}>
                        <p className={styles.subjectTitle}>Грамотность чтения</p>
                        <img className={styles.subjectImg} src={read_literacy}/>
                    </div>
                    <div className={styles.subject} style={{borderColor: '#3B46E0'}}>
                        <p className={styles.subjectTitle}>История Казахстана</p>
                        <img className={styles.subjectImg} src={history}/>
                    </div>
                    <div className={styles.subject} style={{borderColor: '#60DCFF', marginBottom: '0'}}>
                        <p className={styles.subjectTitle}>Математическая грамотность</p>
                        <img className={styles.subjectImg} src={math_literacy}/>
                    </div>
                    <a href="https://wa.me/77001400505?text=Здравствуйте! Хочу записаться на курс" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.mainButton}>
                            Записаться
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Subjects;