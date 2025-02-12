import s from './Contact.module.css'
import { IoIosContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={s.card}>
          <IoIosContact className={s.icon} />
          <p className={s.name}>{name}</p>{" "}
        </div>
        <div className={s.card}>
          <MdLocalPhone className={s.icon} />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact