import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { IoIosContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import s from "./ContactEditor.module.css";

import { selectEditingContact } from "../../redux/contacts/selectors";
import { clearEditingContact } from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";

const ContactEditor = ({ onClose }) => {
  const editingContact = useSelector(selectEditingContact);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setNumber(editingContact.number);
    } else {
      setName("");
      setNumber("");
    }
  }, [editingContact]);

  const handleSubmit = e => {
    e.preventDefault();
    if (editingContact) {
      dispatch(editContact({ id: editingContact.id, name, number }));
      onClose();
    }
    toast.success(`Contact "${name}" was successfully edited!`);
  };

  const handleClose = () => {
    dispatch(clearEditingContact());
    onClose();
  };

  return (
    <Formik>
      <Form className={s.form} onSubmit={handleSubmit}>
        <Toaster position="top-right" />

        <div className={s.content}>
          <div className="flex flex-col items-center gap-3">
            <label className="input validator">
              <IoIosContact className="w-4 h-4 p-0" />
              <Field
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                value={name}
              />
            </label>
            <label className="input validator">
              <MdLocalPhone className="w-4 h-4 p-0" />
              <Field
                type="number"
                className="tabular-nums [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={e => setNumber(e.target.value)}
                placeholder="Number"
                value={number}
              />
            </label>
          </div>
          <div className={s.btn}>
            <button className="btn btn-success w-24 h-9" type="submit">
              ✔Confirm
            </button>
            <button
              className="btn btn-error w-24 h-9"
              onClick={handleClose}
              type="button"
            >
              ❌Cancel
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
