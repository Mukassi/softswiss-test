import rocket from '@/assets/rocket.webp';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={rocket} alt="Rocket" className="footer__image" />
      <p className="footer__text">Exciting space adventure!</p>
    </footer>
  );
}
