import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}  autoComplete="off">
      <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            required
          />
       
          <TextField
            label="Password"
            variant="outlined"
            type="email"
            name="email"
            required
          />

      <Button variant="contained" type="submit" sx={{  mt: '10px' }}>
            Log In
          </Button>
        </form>
    
  );
};
