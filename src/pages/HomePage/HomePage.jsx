
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>Welcome to Phonebook!</h1>
      <p className={s.firstText}>Keep your contacts organized and easily accessible.</p>

      <h2 className={s.subtitle}>Your Contacts - Always Safe</h2>
      <p className={s.text}>Store, search, and manage your contacts effortlessly.</p>

      <h2 className={s.subtitle}>Smart Phone Directory</h2>
      <p className={s.text}>Add, delete, edit, and find the right numbers in seconds.</p>

      <h2 className={s.subtitle}>No More Contact Chaos!</h2>
      <p className={s.text}>We designed Phonebook to make your contact list simple and convenient.</p>
    </div>
  );
};

export default HomePage;
