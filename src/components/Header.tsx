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
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const handleResize = () => {
    if (burgerRef.current && !burgerRef.current.offsetParent) {
      setIsSidebarOpened(false);
      document.body.classList.remove('no-scroll');
    }
  };

  const toggleSidebar = (value: boolean) => {
    if (value) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    setIsSidebarOpened(value);
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
      <Link to="/" onClick={() => toggleSidebar(false)}>
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
      <button ref={burgerRef} className="burger-icon" onClick={() => toggleSidebar(!isSidebarOpened)}>
        {isSidebarOpened ? <CrossIcon /> : <BurgerIcon />}
      </button>

      <aside className={`sidebar ${isSidebarOpened ? 'sidebar__open' : ''}`}>
        <div className="sidebar__content">
          {items.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="sidebar__link"
              onClick={() => toggleSidebar(!isSidebarOpened)}
              tabIndex={isSidebarOpened ? 0 : -1}
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
