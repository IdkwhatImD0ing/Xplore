const AttractionTypeInput = () => {
    async function onPromptSubmit(event) {
        'use server'
    }
    return (
        <>
        <div className={styles.card}>
            <h1>Input Attraction Types</h1>
            <form action={onPromptSubmit} className={styles.attractionTypeForm}>
                <label for="prompt">Prompt: <input type="text" name="prompt" /> </label>
                <button type='submit'>Confirm</button>
            </form>
        </div>
        </>
    )
}
export { AttractionTypeInput };