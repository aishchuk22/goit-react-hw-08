import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts, selectIsError, selectIsLoading } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const ContactList = () => {

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);


  return (
    <div>
      {isError && <h2>Oops, something went wrong... Please, try again later!</h2>}
      {isLoading && <Loader />}
      <ul className={s.list}>
      {contacts.map(({id, name, number}) => (
        <li className={s.listItem} key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
          />
        </li>
      ))}
      </ul>
   </div>
  );
};

export default ContactList;