import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import { CartIcon } from './components/icons/CartIcon';

const data = {
  menu: [
    { title: 'Home', url: '/home', id: 'home' },
    { title: 'Products', url: '/products', id: 'products' },
    { title: 'Cart', url: '/cart', id: 'cart', component: CartIcon }
  ],
  hero: {
    title: ['Discover the vast expanses of ', { text: 'space', class: 'text-pink' }],
    description: ['Where the possibilities are ', { text: 'endless!', class: 'text-yellow' }],
    button: {
      label: 'Learn more',
      className: 'btn__primary',
      onClick: () => {
        console.log('Learn more clicked');
      }
    }
  }
};

function App() {
  const { menu, hero } = data;

  return (
    <>
      <Header items={menu} />
      <Hero {...hero} />
    </>
  );
}

export default App;
