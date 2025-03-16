import Button from './Button';
import { renderText } from '@/utils/text';

export interface HeroProps {
  title: (string | { text: string; class: string })[];
  description: (string | { text: string; class: string })[];
  button: {
    label: string;
    onClick: () => void;
    className?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ title, description, button }) => {
  return (
    <section className="section hero">
      <div className="container hero__container">
        <h1 className="hero__title">{renderText(title)}</h1>
        <p className="hero__description">{renderText(description)}</p>
        <Button label={button.label} onClick={button.onClick} className={button.className} />
      </div>
    </section>
  );
};
export default Hero;
