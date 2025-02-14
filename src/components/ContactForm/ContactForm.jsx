import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { LuContactRound } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";

import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import s from "./ContactForm.module.css";

const ContactForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
      })
    );
    toast.success("Contact was added!");
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3).max(40).required("Please, enter a name"),
    number: Yup.string().min(3).max(40).required("Please, enter a valid phone number"),
  });

  return (
    <div className="bg-[rgb(237,251,255)]">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <Toaster position="top-center" />

          <label className="input validator">
            <LuContactRound className="w-4 h-4 p-0"/>
            <Field type="text" name="name" placeholder="Peter Parker" className="input-bordered" />
          </label>
          <ErrorMessage name="name" className={s.error} component="p" />

          <label className="input validator mt-3">
            <MdPhoneAndroid className="w-4 h-4 p-0"/>
            <Field type="number" name="number" placeholder="+38 (012) 345-67-89" className="input-bordered [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
          </label>
          <ErrorMessage name="number" className={s.error} component="p" />

          <div className="mt-5">
            <button className="btn btn-success font-bold" type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
