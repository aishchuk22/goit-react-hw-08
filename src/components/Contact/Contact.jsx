import { IoIosContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import s from "./Contact.module.css";

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
        <button className="btn w-15 h-5.5 italic p-0 pr-1 border-1 border-gray-500" onClick={() => onEdit(id)}>
          ✒Edit
        </button>
        <button className="btn btn-error w-15 h-5.5 italic p-0 pr-0.5 border-1 border-gray-500" onClick={() => onDelete(id)}>
          ❌Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
