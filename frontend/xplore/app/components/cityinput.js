import styles from "../page.module.css";

const CityInput = () => {
    // user inputs cities/hotels, duration for each in days,
    // user inputs preferred type of attractions (museums, tech, nature, etc)
    async function onCitySubmit(formData) {
        'use server'
        console.log(formData)

    }



    return (
        <>
            <div className={styles.card}>
                <h1>Input Cities</h1>
                <form action={onCitySubmit}>
                    <label for="city"><input type="text" name="city" /> City</label>
                    <label for="days"><input type="number" name="days" /> Days</label>
                    <button type='submit'>Add</button>
                </form>

                <h2>Cities Added:</h2>
                <table>
                    <tr>
                        <th>City</th>
                        <th>Days</th>
                    </tr>
                    <tr>
                        <td>City1</td>
                        <td>Days1</td>
                    </tr>
                    <tr>
                        <td>City2</td>
                        <td>Days2</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export { CityInput };