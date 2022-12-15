// import { ContactForm } from './ContactForm/ContactForm';
import {useEffect} from 'react'
// import {ContactList} from './ContactList/ContactList'
// import { Filter } from './Filter/Filter';
// import { Container } from './Container/Container';

// // import {fetchContacts} from 'redux/operations'
import { Routes, Route } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
import { HomePage } from 'redux/pages/Home/Home';
import { RegisterPage } from 'redux/pages/Registration';
import {  LoginPage } from 'redux/pages/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute} from './PrivateRoute';
import { ContactsPage } from 'redux/pages/Contacts/Contacts';
import { NotFound } from './NotFound/NotFound';

import { getIsRefreshing } from 'redux/auth/selectors';
import { Layout } from './Layout';

import { useDispatch, useSelector} from 'react-redux';
import { LoaderComponent } from './Loader/Loader'
import {refreshUser} from 'redux/auth/operations'



export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (isRefreshing ? 
 
    <LoaderComponent/>  
    :
    
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      <Route
           path="*"
          element={
            <PrivateRoute redirectTo="/login" component={<NotFound/>} />
          }
        />
      
      </Routes>
  
  );
  
}







