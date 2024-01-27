import styles from "../page.module.css";
const CalculateRoutes = () => {
    return (
        <>
            <div className={styles.card}>
                <h1>Calculate Routes</h1>
                <p>Click the button below to calculate the best route for your trip!</p>
                <button>Calculate</button>
            </div>
        </>
    )
}
export { CalculateRoutes };