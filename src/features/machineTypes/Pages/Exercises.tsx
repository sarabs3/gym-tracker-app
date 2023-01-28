import { Outlet } from "react-router-dom";
import EditButton from "../../../components/BackButton";

const Exercises = () => {
  return (
    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">    
    <EditButton />
    <Outlet />
    
    </div>
  );
};

export default Exercises;
