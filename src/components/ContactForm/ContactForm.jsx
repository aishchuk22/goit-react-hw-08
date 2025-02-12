import { ErrorMessage, Formik, Field, Form } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
      ...values,
      })
    );
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
          <label className={s.label}>
            Name
            <Field type='text' name='name' className={s.input} placeholder='E.g. John Snow'/>
            <ErrorMessage name='name' className={s.error} component='p' />
          </label>
          <label className={s.label}>
            Number
            <Field type='text' name='number' className={s.input} placeholder='123-456-7890'/>
            <ErrorMessage name='number' className={s.error} component='p' />
          </label>
          <button className={s.formBtn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;