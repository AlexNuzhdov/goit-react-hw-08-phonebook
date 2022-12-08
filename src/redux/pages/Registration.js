import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterPage = () => {
  return (
    
    <div>
      <h1 className={css.h1}>Create your account</h1>
      <RegisterForm />

    </div>
  );
};