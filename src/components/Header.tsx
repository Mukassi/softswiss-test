import { Link } from 'react-router';
import { LogoIcon } from './icons/LogoIcon';
import { JSX, useEffect, useRef, useState } from 'react';
import { BurgerIcon } from './icons/BurgerIcon.tsx';
import { CrossIcon } from './icons/CrossIcon.tsx';

interface HeaderItems {
  id: string;
  title: string;
  url: string;
  component?: () => JSX.Element;
}
function Header({ items }: Readonly<{ items: HeaderItems[] }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const handleResize = () => {
    if (burgerRef.current && !burgerRef.current.offsetParent) {
      setIsMenuOpen(false);
    }
  };

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="container header">
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className="header__navigation">
        {items.map((item) => {
          if (item.component) {
            return (
              <Link to={item.url} key={item.id} className="header__link">
                <item.component key={item.id} />
              </Link>
            );
          } else {
            return (
              <Link to={item.url} key={item.id} className="header__link">
                {item.title}
              </Link>
            );
          }
        })}
      </nav>
      <button ref={burgerRef} className="burger-icon" onClick={handleBurgerClick}>
        {isMenuOpen ? <CrossIcon /> : <BurgerIcon />}
      </button>

      <aside className={`sidebar ${isMenuOpen ? 'sidebar__open' : ''}`}>
        <div className="sidebar__content">
          {items.map((item) => (
            <Link to={item.url} key={item.id} className="sidebar__link" onClick={handleBurgerClick}>
              {item.title}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}

export default Header;
