import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Contents from './layout/Contents';
import MyCarousel from './component/Carousel';
import { useLocation } from 'react-router';
import Bestseller from './component/Bestseller';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <Contents />
      {isHome && <MyCarousel />}
      {isHome && <Bestseller />}
      
    </>
  )
}

export default App
