import { Drink } from "../Drink/Drink"
import "../Menu/menu.css"

export const Menu = () => {
    return (
        <section className="menu" id="menu">
          <div className="container">
            <h2>Naše nabídka</h2>
            <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>
            <div className="drinks-list">
              <Drink name={'Espresso'} image={"/cups/espresso.png"} />
              <Drink name={'Doppio'} image={"/cups/doppio.png"} />
              <Drink name={'Lungo'} image={"/cups/lungo.png"} />
            </div>
          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
    )
}