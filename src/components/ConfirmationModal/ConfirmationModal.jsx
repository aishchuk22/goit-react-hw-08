import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import s from "./ConfirmationModal.module.css";

import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectContactId, selectOpenModal } from "../../redux/modal/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { closeModal } from "../../redux/modal/slice";

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  const openModal = useSelector(selectOpenModal);
  const contactId = useSelector(selectContactId);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const handleConfirm = () => {
    dispatch(deleteContact(contactId));
    if (!isError) {
      dispatch(closeModal());
    }
    toast.success("The contact was deleted!");
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  if (!openModal) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <p className={s.text}>Are you sure this contact deserves to be deleted?</p>
        {isError && <h2>Oops...Something went wrong!</h2>}
        {isLoading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            Loading...
          </button>
        ) : (
          <div className={s.btn}>
            <button className="btn btn-success w-20 font-bold" onClick={handleConfirm}>
              ✔Yup
            </button>
            <button className="btn btn-error w-20 font-bold" onClick={handleCancel}>
              ❌Nope
            </button>
          </div>
        )}
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default ConfirmationModal;
