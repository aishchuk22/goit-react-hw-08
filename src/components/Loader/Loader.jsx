import { InfinitySpin } from 'react-loader-spinner';
import s from "./Loader.module.css";
    
const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#212121"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;