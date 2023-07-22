const Dvd = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <legend>Dvd</legend>
            <div className="subform">
                <div className="form-group">
                    <div>
                        <label htmlFor="size">Size (MB)</label>
                        <input
                            type="number"
                            min={1}
                            placeholder="#size"
                            id="size"
                            name="size"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p className="information">Please provide size in MB</p>
            </div>
        </fieldset>
    )
}

export default Dvd;