import "../Drink/drink.css"

export const Drink = ({ id, name, ordered, image, layers }) => {
    return (
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                    <img src={image} />
                </div>
                <div className="drink__info">
                    <h3>{name}</h3>
                    {/*{layers.map((layer, index) => (
                        <div key={index} className="layer">
                            <div className="layer__color" style={{ backgroundColor: layer.color }}></div>
                            <div className="layer__label">{layer.label}</div>
                        </div>
                    ))}*/}
                </div>
            </div>
            <form className="drink__controls">
                <input type="hidden" className="order-id" value={id} />
                <button className="order-btn">Objednat</button>
            </form>
        </div>
    )
}