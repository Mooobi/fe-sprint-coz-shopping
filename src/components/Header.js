import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../img/logo.png';
import hamburger from '../icon/hamburger.png';
import product from '../icon/product.png';
import bookmark from '../icon/bookmark.png';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseOver = () => {
    setDropdown(true);
  };

  const handleMouseOut = () => {
    setDropdown(false);
  };

  return (
    <>
      <header className={classes.header}>
        <section className={classes.leftSection}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/">
            <p>COZ Shopping</p>
          </Link>
        </section>
        <section className={classes.rightSection}>
          <img
            src={hamburger}
            alt="hamburger"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          {dropdown && (
            <nav
              className={classes.nav}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className={classes.tail} />
              <section className={classes.tab}>ㅇㅇㅇ님 안녕하세요!</section>
              <section className={`${classes.tab} ${classes.secTab}`}>
                <Link to="/products/list" className={classes.link}>
                  <img src={product} alt="product" />
                  상품리스트 페이지
                </Link>
              </section>
              <section className={classes.tab}>
                <Link to="/bookmark" className={classes.link}>
                  <img src={bookmark} alt="bookmark" />
                  북마크 페이지
                </Link>
              </section>
            </nav>
          )}
        </section>
      </header>
    </>
  );
};

export default Header;
