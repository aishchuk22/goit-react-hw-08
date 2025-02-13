import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { MdLocalPhone } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { selectEditingContact } from "../../redux/contacts/selectors";
import { clearEditedContact } from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";

import s from "./ContactEdit.module.css";


const ContactEdit = ({ onClose }) => {
    const editedContact = useSelector(selectEditingContact);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    
  useEffect(() => {
    if (editedContact) {
      setName(editedContact.name);
      setPhoneNumber(editedContact.number);
    } else {
      setName("");
      setPhoneNumber("");
    }
  }, [editedContact]);

  const handleSubmit = e => {
    e.preventDefault();
    if (editedContact) {
      dispatch(editContact({ name, phoneNumber, id: editedContact.id }));
      onClose();
    }
    toast.success(`${name} contact was successfully edited!`);
  };

  const handleClose = () => {
    dispatch(clearEditedContact());
    onClose();
  };

  return (
    <Formik>
      <Form className={s.form} onSubmit={handleSubmit}>
        <Toaster position="top-right" reverseOrder={false} />

        <div className={s.content}>
          <div className="flex flex-col items-center gap-3">
            <label className="input validator">
              <IoIosContact className={s.icon} />
              <Field
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                className="pl-1"
                value={name}
                type="text"
              />
            </label>
            <label className="input validator">
              <MdLocalPhone className={s.icon} />
              <Field
                onChange={e => setPhoneNumber(e.target.value)}
                className="tabular-nums"
                placeholder="Number"
                value={phoneNumber}
                type="number"
              />
            </label>
          </div>
          <div className={s.btn}>
            <button className="btn btn-success  w-18 h-8" type="submit">
              Save
            </button>
            <button
              className="btn btn-error w-18 h-8"
              onClick={handleClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactEdit;