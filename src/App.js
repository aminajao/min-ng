import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero"
import ProductShowcase from "./container/ProductShowcase/ProductShowcase"
import Specification from './components/Specification/Specification'
import Overview from './components/Overview/Overview'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Specification />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default App;
