import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <ul className={css.ul}>
        
            <li className={css.li}>
              <Link to="/register"
                  className={css.link}>
                  Register
             </Link>
            </li>

            <li><Link to="/login"
                  className={css.link}>
                  Log in
               </Link>
            </li> 
      </ul>
    </div>
  );
};
