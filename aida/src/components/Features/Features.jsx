import styles from './Features.module.scss'
import students from "@images/group-students-posing-with-notepads.png";
import meeting from "@images/team-meeting-startups.png";
import work from "@images/work-from-home.png";

function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.card_one}>
                <div className={styles.card_img}>
                    <img src={students} />
                </div>
                <h2>10 000</h2>
                <p>учеников по всему Казахстану</p>
            </div>
            <div className={styles.card_two}>
                <div className={styles.card_img}>
                    <img src={meeting} />
                </div>
                <h2>7 000</h2>
                <p>обладателей грантов</p>
            </div>
            <div className={styles.card_three}>
                    <div className={styles.oneFloor}>
                        <h2>
                            в U-study
                        </h2>
                        <ul>
                            <li>Профессиональные преподаватели</li>
                            <li>Практические тесты</li>
                            <li>Онлайн обучение</li>
                        </ul>
                    </div>
                    <div className={styles.secondFloor}>
                        <div className={styles.orangeBlock}>
                            <img src={work}/>
                        </div>
                        <div>
                            <div>
                                <div className={styles.blueBlock}>
                                    <p>выше</p>
                                    <h2>100</h2>
                                    <p>баллов</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Features;