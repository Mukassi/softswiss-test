import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { BurgerIcon } from '@/components/icons/BurgerIcon';
import { CrossIcon } from '@/components/icons/CrossIcon';
import { LogoIcon } from '@/components/icons/LogoIcon';

export interface HeaderItems {
  id: string;
  title: string;
  url: string;
  component?: React.FC;
}
function Header({ items }: Readonly<{ items: HeaderItems[] }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const handleResize = () => {
    if (burgerRef.current && !burgerRef.current.offsetParent) {
      setIsMenuOpen(false);
      document.body.classList.remove('no-scroll');
    }
  };

  const handleBurgerClick = () => {
    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('no-scroll');
    };
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
            <Link
              to={item.url}
              key={item.id}
              className="sidebar__link"
              onClick={handleBurgerClick}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}

export default Header;
