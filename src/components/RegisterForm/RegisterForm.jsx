import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';


// import css from './RegisterForm.module.css';
// import { Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

   return (
    //  <form onSubmit={handleSubmit} className={css.form} o autoComplete="off">
       
    //   <label className={css.label}>
    //     Username
    //      <input className={css.input}
    //       variant="outlined"
    //       color="primary"
    //       type="text"
    //       // name="name"
    //       // value={name}
          
    //        name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //      <input className={css.input}
           
    //       type="email"
    //        name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //      <input className={css.input}
    //        type="password"
    //        name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
       
       <TextField
            label="Name"
            variant="outlined"
            type="name"
            name="name"
            required
          />
       
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
            type="password"
            name="password"
            required
          />

          <Button variant="contained" type="submit" sx={{  mt: '10px' }}>
            Register
          </Button>
        </form>
  );

  
};


