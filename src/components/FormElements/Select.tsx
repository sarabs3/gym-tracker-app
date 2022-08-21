import { ChangeEvent, FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    name: string;
    id: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
const Select: FC<Props> = ({ children, name, id, value, onChange }) => (
    <div className="flex">
  <div className="mb-3 w-full">
    <label className="text-sm mb-1" htmlFor={id}>{name}</label>
    <select onChange={onChange} id={id} value={value} name={id} className="form-select appearance-none
      block
      w-full`
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      w-full
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        {children}
    </select>
  </div>
</div>
);

export default Select;
