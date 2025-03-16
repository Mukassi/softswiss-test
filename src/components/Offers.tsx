import { renderText } from '@/utils/text';
import Button from './Button';

export interface OfferItem {
  id: string;
  title: string;
  description: (string | { text: string; class: string })[] | string;
  bgUrl: string;
  class?: string;
}

const OfferItem: React.FC<{ item: OfferItem }> = ({ item }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${item.bgUrl}')`
      }}
      className={'card ' + (item.class ?? '')}
    >
      <h3 className="card__title">{renderText(item.title)}</h3>
      <p className="card__description">{renderText(item.description)}</p>
      <Button label="Learn more" onClick={() => console.log('Open offer item ' + item.id)} className="btn--secondary" />
    </div>
  );
};
const Offers: React.FC<{ items: OfferItem[] }> = ({ items }) => {
  return (
    <section className="container offers">
      <h2 className="offers__title">Offers</h2>
      {items.map((item) => (
        <OfferItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Offers;
