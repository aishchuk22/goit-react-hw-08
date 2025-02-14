import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ContactEditor from "../ContactEditor/ContactEditor";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { setEditingContact } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";
import {
  selectEditingContact,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

const ContactList = () => {

  const editingContact = useSelector(selectEditingContact);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleModal = id => {
    dispatch(openModal(id));
  };

  const handleCloseModal = () => {
    setIsEditorOpen(false);
  };

  const handleEdit = contact => {
    dispatch(setEditingContact(contact.id));
    setIsEditorOpen(true);
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

      {isEditorOpen && editingContact && (
        <ContactEditor onClose={handleCloseModal} />
      )}
      <ConfirmationModal />
    </>
  );
};

export default ContactList;
