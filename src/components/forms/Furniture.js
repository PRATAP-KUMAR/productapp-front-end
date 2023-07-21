const Furniture = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <div className="subform">
                <div className="form-group">
                    <label htmlFor="height">Height (CM)</label>
                    <input
                        type="number"
                        min={1}
                        placeholder="#height"
                        id="height"
                        name="height"
                        onChange={handleChange}
                    />
                    <label htmlFor="width">Width (CM)</label>
                    <input
                        type="number"
                        min={1}
                        placeholder="#width"
                        id="width"
                        name="width"
                        onChange={handleChange}
                    />
                    <label htmlFor="length">Length (CM)</label>
                    <input
                        type="number"
                        min={1}
                        placeholder="#length"
                        id="length"
                        name="length"
                        onChange={handleChange}
                    />
                </div>
                <p className="information">Please provide dimensions in HxWxL format</p>
            </div>
        </fieldset>
    )
}

export default Furniture;