import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/Usermenu';
import { AuthNav } from '../AuthNav/AuthNav';
import styles from './AppBar.module.css';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';


export const AppBar = () => {
  const  isLoggedIn  =  useSelector(getIsLoggedIn);
  
  return (

    <header className={styles.header}>
      
     <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      
    </header>
    
  
  );
  
};
