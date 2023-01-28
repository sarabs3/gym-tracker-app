import { ReactComponent as BackIcon } from '../icons/back.svg';
import { useNavigate } from "react-router-dom";
export const EditButton = () => {
  const navigate = useNavigate();
  return (

    <button className="flex items-center" onClick={() => navigate(-1)}>
      <BackIcon width={20} height={20} />
      <span>Back</span>
    </button>
  )
};

export default EditButton;
