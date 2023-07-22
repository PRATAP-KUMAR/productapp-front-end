const Book = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <legend>Book</legend>
            <div className="subform">
                <div className="form-group">
                    <div>
                        <label htmlFor="book weight">Weight (KG)</label>
                        <input
                            type="number"
                            min={1}
                            placeholder="#weight"
                            id="weight"
                            name="weight"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p className="information">Please provide weight of the book in KG's</p>
            </div>
        </fieldset>
    )
}

export default Book;