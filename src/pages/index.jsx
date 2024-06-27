import { render } from '@czechitas/render';
import '../global.css';
import { Header } from "./components/Header/Header"
import { Banner } from "./components/Banner/Banner"
import { Menu } from "./components/Menu/Menu"
import { Gallery } from "./components/Gallery/Gallery"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { Scroll_fce } from './components/Scroll_fce/Scroll_fce';


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
)

Scroll_fce()