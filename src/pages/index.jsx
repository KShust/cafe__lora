import { render } from '@czechitas/render';
import '../global.css';
import { Header } from "../components/Header/Header"
import { Banner } from "../components/Banner/Banner"
import { Menu } from "../components/Menu/Menu"
import { Gallery } from "../components/Gallery/Gallery"
import { Contact } from "../components/Contact/Contact"
import { Footer } from "../components/Footer/Footer"
import { Scroll_fce } from '../components/Scroll_fce/Scroll_fce';

const response = await fetch(`http://localhost:4000/api/drinks`)
const json = await response.json()
export const drinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinks}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
)

Scroll_fce()

const forms = document.querySelectorAll('.drink__controls')
forms.forEach((form) =>
  form.addEventListener('submit', (formFce) => {
    formFce.preventDefault()
    const napojID = form.dataset.id 

    const drink = drinks.find((drink) => drink.id == napojID);
    const newOrderedState =!drink.ordered

      fetch(`http://localhost:4000/api/drinks/${napojID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        op: 'replace',
        path: '/ordered',
        value: newOrderedState ,
      }]),
    });
    
    window.location.reload()
  }
))