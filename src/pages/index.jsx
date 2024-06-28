import { render } from '@czechitas/render';
import '../global.css';
import { Header } from "./components/Header/Header"
import { Banner } from "./components/Banner/Banner"
import { Menu } from "./components/Menu/Menu"
import { Gallery } from "./components/Gallery/Gallery"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { Scroll_fce } from './components/Scroll_fce/Scroll_fce';

const response = await fetch(`http://localhost:4000/api/drinks`)
const json = await response.json()
export const drinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
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