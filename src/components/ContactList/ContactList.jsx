import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ContactEdit from "../ContactEdit/ContactEdit";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { openModal } from "../../redux/confirmationModal/slice";
import { setEditedContact } from "../../redux/contacts/slice";
import {
  selectEditingContact,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

const ContactList = () => {

  const editedContact = useSelector(selectEditingContact);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

   const handleModal = id => {
    dispatch(openModal(id));
  };

   const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = contact => {
    dispatch(setEditedContact(contact.id));
    setIsModalOpen(true);
  };

  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.item} key={contact.id}>
            <Contact
              onEdit={() => handleEdit(contact)}
              number={contact.number}
              onDelete={handleModal}
              name={contact.name}
              id={contact.id}
            />
          </li>
        ))}
      </ul>

      {isModalOpen && editedContact && (
        <ContactEdit onClose={closeModal} />
      )}
      <ConfirmationModal />
    </>
  );
};

export default ContactList;