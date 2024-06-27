import "../Drink/drink.css"
import { Layer } from "../Layers/Layers"

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
                        <Layer key={index} color={layer.color} label={layer.label} />
                    ))}*/}
                    <Layer color={'#613916'} label={'espresso'} />
                </div>
            </div>
            <form className="drink__controls">
                <input type="hidden" className="order-id" value={id} />
                <button className="order-btn">Objednat</button>
            </form>
        </div>
    )
}