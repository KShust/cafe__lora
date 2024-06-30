import { render } from '@czechitas/render';
import '../global.css';
import './order.css';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/Order';

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image')
const json = await response.json()
const objednavka = json.data
const isEmpty = objednavka.length === 0

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          {isEmpty ? (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          ) : (
            <div className="order__items">
              <Order items={objednavka} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  </div>
);
