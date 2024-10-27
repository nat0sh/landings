import styles from '../Benefits/Benefits.module.scss'

import exam from '@images/exam.png'
import graduates from '@images/graduates.png'
import girl from '@images/girl.png'
import number1 from '@icons/number1.png'
import number2 from '@icons/number2.png'
import number3 from '@icons/number3.png'

function Benefits() {
    return (
        <div className={styles.benefits}>
            <h2>Почему выбирают подготовку с Ustudy</h2>
            <div className={styles.content}>
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
                <div className={styles.imageBlocks}>
                    <div className={styles.imageBlockOne}>
                        <img src={exam} />
                        <img src={graduates} />
                    </div>
                    <div className={styles.imageBlockTwo}>
                        <img src={girl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;