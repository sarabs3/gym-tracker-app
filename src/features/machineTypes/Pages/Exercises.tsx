import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import EditButton from "../../../components/BackButton";
import { ReactComponent as MenuIcon } from "../../../assets/icons/hamburger.svg";
import Navigation from "../../../components/Navigation";
import { useAppSelector } from "../../../app/hooks";
import { selectTypes } from "../MachineTypesSlice";
import useWindowSize from "../../../hooks/useWindowResize";
import { Size } from "../../../types/machine";

const Exercises = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const size: Size = useWindowSize();
  const types = useAppSelector(selectTypes);
  let location = useLocation();

  useEffect(() => {
    if (!size || !size.width) return;
    if (size?.width < 1024) {
      setShowMenu(false);
      setIsMobile(true);
    } else {
      setShowMenu(true);
      setIsMobile(false);
    }
  }, [size]);

  useEffect(() => {
    if (isMobile) {
      setShowMenu(false);
    }
  }, [location, isMobile]);
  return (

    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">    
    
      {isMobile && (
        <div className="flex justify-between">
          <h2 className="text-lg pl-5">Manage</h2>
          <MenuIcon className="pr-2" onClick={() => setShowMenu(!showMenu)} />
        </div>
      )}
      {showMenu && <Navigation navMenus={types} />}
      <div className="m-4">
        <EditButton />
      </div>
      <Outlet />
    </div>
  );
};

export default Exercises;
