const AttractionTypeInput = () => {
    async function onPromptSubmit(event) {
        'use server'
    }
    return (
        <>
        <div>
            <h1 className="text-xl font-bold">Input Attraction Types</h1>
            <form action={onPromptSubmit}>
                <label for="prompt">Prompt: <input type="text" name="prompt" /> </label>
                <button type='submit'>Confirm</button>
            </form>
        </div>
        </>
    )
}
export { AttractionTypeInput };