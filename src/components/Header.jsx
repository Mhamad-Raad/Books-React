import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSmileWink } from 'react-icons/fa';
import css from './Header.module.css';

function Header() {
  return (
    <div className={css.header}>

      <div className={css.header_left_nav}>
        <div>
          <h1 className={css.logo}>
            Bookstore
          </h1>
          <ul>
            <li>
              <NavLink to="/" className={css.links}>
                Books
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="Categories" className={`${css.links} ${css.disabled}`}>
                Categories
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={css.profile_pic}>
          <FaSmileWink className={css.pica} />
        </div>
      </div>
    </div>
  );
}

export default Header;
