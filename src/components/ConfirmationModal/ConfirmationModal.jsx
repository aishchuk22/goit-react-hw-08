import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { selectContactId, selectOpenModal } from "../../redux/confirmationModal/selectors";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { closeModal } from "../../redux/confirmationModal/slice";
import { deleteContact } from "../../redux/contacts/operations";

import s from "./ConfirmationModal.module.css";

const ConfirmationModal = () => {

  const dispatch = useDispatch();

  const contactId = useSelector(selectContactId);
  const openModal = useSelector(selectOpenModal);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const handleConfirm = () => {
    dispatch(deleteContact(contactId));
    if (!isError) {
      dispatch(closeModal());
    }
    toast.success("This contact is deleted!");
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
        <p className={s.text}>Does this contact deserve to be deleted like that?</p>
        {isError && <h2>Oops...Something went wrong!</h2>}
        {isLoading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            Please wait...
          </button>
        ) : (
          <div className={s.btn}>
            <button className="btn btn-success" onClick={handleConfirm}>
              Yes
            </button>
            <button className="btn btn-error" onClick={handleCancel}>
              Nope
            </button>
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ConfirmationModal;