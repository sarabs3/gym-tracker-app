import { useAppSelector } from "../../../app/hooks";
import { selectTypes } from "../MachineTypesSlice";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "../../../assets/icons/hamburger.svg";
import useWindowSize from "../../../hooks/useWindowResize";
import { Size } from "../../../types/machine";
import Navigation from "../../../components/Navigation";

const MachineTypes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  let location = useLocation();
  const types = useAppSelector(selectTypes);

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
    <div className="container mx-auto md:mt-10">
      {isMobile && (
        <div className="flex justify-between">
          <h2 className="text-lg pl-5">Manage</h2>
          <MenuIcon className="pr-2" onClick={() => setShowMenu(!showMenu)} />
        </div>
      )}
      {showMenu && <Navigation navMenus={types} />}
      <Outlet />
    </div>
  );
};

export default MachineTypes;
