import styles from './Benefits.module.scss'
import exam from '@images/exam.png'
import graduate from '@images/graduate.png'
import woman from '@images/sit_desk.png'
import number1 from '@images/number1.png'
import number2 from '@images/number2.png'
import number3 from '@images/number3.png'

function Benefits() {
    return (
        <div className={styles.benefits}>
            <h2>U-study выбирает за:</h2>
            <div className={styles.content}>
                <div className={styles.imageBlocks}>
                    <div className={styles.imageBlockOne}>
                        <img src={exam} />
                        <img src={graduate} />
                    </div>
                    <div className={styles.imageBlockTwo}>
                        <img src={woman} />
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.benefit}>
                        <div className={styles.benefitTitle}>
                            <img src={number1} />
                            <h4>Системный подход</h4>
                        </div>
                        <p>Курсы включают в себя не только теоретические занятия, но и регулярные тестирования для оценки прогресса.</p>
                    </div>
                    <div className={styles.benefit}>
                        <div className={styles.benefitTitle}>
                            <img src={number2} />
                            <h4>Поддержку на каждом этапе</h4>
                        </div>
                        <p>От начала обучения до самого экзамена вы будете получать поддержку и мотивацию от наших преподавателей.</p>
                    </div>
                    <div className={styles.benefit}>
                        <div className={styles.benefitTitle}>
                            <img src={number3} />
                            <h4>Современные учебные материалы</h4>
                        </div>
                        <p>Используем актуальные тесты и ресурсы, которые соответствуют стандартам здачи ЕНТ </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;