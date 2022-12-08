import styles from 'redux/pages/Home/Home.module.css';

export const HomePage = () => {
  return (

    <div className={styles.div}>
      <h1 className={styles.title}>Phonebook</h1>

      <p className={styles.text}>
        This app will help you manage your contacts in a proper way.
      </p>

     
        <p className={styles.info}>
          Please <b>Sign up</b> and then <b>Log in</b> so that to have access to
          your contacts.
        </p>
      
      
    </div>
  );
};