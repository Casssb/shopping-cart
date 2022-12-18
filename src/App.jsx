import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
