import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMachineType } from "../types/machine";
import { styleClass } from "../util";

const Navigation: FC<Props> = ({ navMenus }) => {
  const [activeMenu, setActiveMenu] = useState("manage");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setActiveMenu(params.id);
    } else {
      setActiveMenu("manage");
    }
  }, [params.id]);
  return (
    <nav className="my-1 flex flex-col lg:flex-row">
      <Link className={styleClass("manage", activeMenu)} to={`/types`}>
        Manage Types
      </Link>
      <Link className={styleClass("all", activeMenu)} to={`/types/all`}>
        All
      </Link>
      {navMenus.map((menu) => (
        <Link
          key={menu.id}
          className={styleClass(menu.id, activeMenu)}
          to={`/types/${menu.id}`}
        >
          {menu.type}
        </Link>
      ))}
    </nav>
  );
};

interface Props {
  navMenus: IMachineType[];
}

export default Navigation;
