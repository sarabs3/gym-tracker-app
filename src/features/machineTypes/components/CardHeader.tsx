import { FC } from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

const CardHeader: FC<Props> = ({ title, onDelete }) => (
  <div className="flex bg-gray-300 justify-between p-2 items-center font-bold rounded-t">
    <span>{title}</span>
    <DeleteIcon onClick={onDelete} width={32} className="cursor-pointer" />
  </div>
);

interface Props {
  title: string | undefined;
  onDelete: () => void;
}

export default CardHeader;
