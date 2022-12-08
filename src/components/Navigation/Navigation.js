import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <ul className={css.ul}>

        <li className={css.li}>
          <Link to="/"
          className={css.link}>Home</Link>
        </li>
        {isLoggedIn && (
           <li className={css.li}>
            <Link to="/contacts"
             className={css.link}>
             Contacts
            </Link>
           </li>
        )}
        
      </ul>
    
    
    </nav>
  );
};
