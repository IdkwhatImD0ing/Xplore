import styles from "../page.module.css";

const DaySwitcher = () => {
    let day = 2;
    let city = "San Francisco";

    return (
        <>
            <div className={styles.card}>
                <h1>Day {day}</h1>
                <h2>in {city}</h2>
                <div className={styles.flexrow}>
                    <button>Previous Day</button>
                    <button>Next Day</button>
                </div>
                <ul>
                    <li>Attraction 1</li>
                    <li>Attraction 2</li>
                    <li>Attraction 3</li>
                </ul>
            </div>
        </>
    )
}
export { DaySwitcher };