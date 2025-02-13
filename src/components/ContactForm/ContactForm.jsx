import { ErrorMessage, Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { IoIosContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
      ...values,
      })
    );
    toast.success("Your contact was added successfully!");
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Toaster position="top-right" reverseOrder={false} />
          
          <label className="input validator">
            <IoIosContact className={s.icon}/>
            <Field type='text' name='name' placeholder='E.g. John Snow'/>
          </label>
            <ErrorMessage name='name' className={s.error} component='p' />

          <label className="input validator mt-5">
            <MdLocalPhone className={s.icon}/>
            <Field type='number' name='number' placeholder='123-456-7890'/>
          </label>
            <ErrorMessage name='number' className={s.error} component='p' />

          <button className="btn btn-success" type='submit'>
            Add contact
          </button>
          
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;