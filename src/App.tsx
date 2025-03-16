import '@/App.scss';

import bgOffer1 from '@/assets/offer-space-1.webp';
import bgOffer2 from '@/assets/offer-space-2.webp';
import bgOffer3 from '@/assets/offer-space-3.webp';
import bgOffer4 from '@/assets/offer-space-4.webp';

import Header, { HeaderItems } from '@/components/Header';
import Hero, { HeroProps } from '@/components/Hero';
import { CartIcon } from '@/components/icons/CartIcon';
import Offers, { OfferItem } from '@/components/Offers';
import InfoArticle, { InfoArticleProps } from '@/components/InfoArticle';
import Footer from '@/components/Footer';

interface DataProps {
  header: HeaderItems[];
  hero: HeroProps;
  offers: OfferItem[];
  infoArticle: InfoArticleProps;
}
const data: DataProps = {
  header: [
    { title: 'Home', url: '/home', id: 'home' },
    { title: 'Products', url: '/products', id: 'products' },
    { title: 'Cart', url: '/cart', id: 'cart', component: CartIcon }
  ],
  hero: {
    title: ['Discover the vast expanses of ', { text: 'space', class: 'text--pink' }],
    description: ['Where the possibilities are ', { text: 'endless!', class: 'text--yellow' }],
    button: {
      label: 'Learn more',
      className: 'btn--primary',
      onClick: () => {
        console.log('Learn more clicked');
      }
    }
  },
  offers: [
    {
      id: '1',
      title: 'Move the borders \nof reality!',
      description: ['Go on a space adventure', { text: " - it's possible with us!", class: 'lg-inline-block' }],
      bgUrl: bgOffer1,
      class: 'card--large'
    },
    {
      id: '2',
      title: 'Space is not \njust stars and \nplanets',
      description: 'it is a majestic journey to ',
      bgUrl: bgOffer2
    },
    {
      id: '3',
      title: 'For those \nwho dream \nof stars',
      description: 'Our offer: make your dream come true',
      bgUrl: bgOffer3
    },
    {
      id: '4',
      title: 'Fulfill your \nfantastic dreams',
      description: 'Space has never been so close',
      bgUrl: bgOffer4,
      class: 'card--large'
    }
  ],
  infoArticle: {
    title: 'Embark on a space journey',
    description:
      'Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec venenatis, nisi eu fringilla interdum, nisi ligula cursus mauris, ut sodales nunc mauris id felis. Phasellus scelerisque, purus a tincidunt dignissim, turpis metus suscipit metus, sed sagittis erat orci nec erat. Vivamus sodales ligula id magna posuere, a aliquam velit molestie. Ut tincidunt, orci a facilisis dapibus, odio quam dapibus nunc, eu pellentesque nulla turpis vel odio. Integer volutpat massa eget libero cursus, id posuere dolor placerat. Fusce sagittis ex nec dui volutpat, ac posuere dolor luctus.'
  }
};

function App() {
  const { header, hero, offers, infoArticle } = data;

  return (
    <>
      <Header items={header} />
      <Hero {...hero} />
      <Offers items={offers} />
      <InfoArticle {...infoArticle} />
      <Footer />
    </>
  );
}

export default App;
