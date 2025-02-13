import { IoIosContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import s from './Contact.module.css'

const Contact = ({ name, number, id, onDelete, onEdit }) => {
  return (
    <>
      <div>
        <div className={s.container}>
          <IoIosContact className={s.icon} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.container}>
          <MdLocalPhone className={s.icon} />
          <p className={s.tel}>{number}</p>
        </div>
      </div>
      <div className={s.btn}>
        <button className="btn btn-warning w-12 h-5" onClick={() => onEdit(id)}>
          Edit
        </button>
        <button className="btn btn-error w-12 h-5" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;