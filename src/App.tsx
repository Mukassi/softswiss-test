import Header from './components/Header';
import { CartIcon } from './components/icons/CartIcon';

const data = {
  menu: [
    { title: 'Home', url: '/home', id: 'home' },
    { title: 'Products', url: '/products', id: 'products' },
    { title: 'Cart', url: '/cart', id: 'cart', component: CartIcon }
  ]
};

function App() {
  const { menu } = data;

  return (
    <>
      <Header items={menu} />
    </>
  );
}

export default App;
