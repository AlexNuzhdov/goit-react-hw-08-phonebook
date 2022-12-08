import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUsername } from 'redux/auth/selectors';
import { useSelector  } from 'react-redux';
import css from './UserMenu.module.css';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user  = useSelector(getUsername);

  return (
    <nav className={css.nav}>
      <span className={css.span}>
          Welcome, {user.name}
        </span>

        <button
            variant="contained"
            type="button"
            onClick={() => dispatch(logOut())}
          >
            {' '}
            Logout
        </button>
    </nav>
  );
}