import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactsList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center mt-10 ">
      <div className="flex flex-col items-center mb-6">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
