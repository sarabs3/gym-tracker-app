import React, { ChangeEvent, FC } from "react";
import Input from "../../../components/FormElements/Input";
import AddNewField from "./AddNewField";
import { FieldTypes, IMachineType } from "../../../types/machine";
import MachineTypeFields from "../MachineTypeFields";
import Select from "../../../components/FormElements/Select";
import CardHeader from "../../../components/CardHeader/CardHeader";
import { useAppDispatch } from "../../../app/hooks";
import {
  addNewField,
  deleteMachineType,
  updateMachineType,
} from "../MachineTypesSlice";

const MachineTypeComponent: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();
  const deleteFieldType = () => {
    dispatch(deleteMachineType({ id: type.id }));
  };
  const handleTypeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(
      updateMachineType({
        id: type.id,
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  const handleAddField = (val: FieldTypes) => {
    dispatch(addNewField({ id: type.id, type: val }));
  };

  return (
    <div
      className="flex flex-col relative m-2 border rounded transition ease-in-out bg-white rounded-lg md:w-[calc(50%-1rem)] xl:w-[calc(33%-1rem)]"
      key={type.id}
    >
      <CardHeader title={type.type} onDelete={deleteFieldType} />
      <div className="border-b p-2 bg-gray-50 px-4">
        <Input
          onChange={handleTypeChange}
          id="type"
          name="Exercise Name"
          value={type.type}
        />
        <Select
          id="title"
          name="Title Attribute"
          value={type.title}
          onChange={handleTypeChange}
        >
          <option>Select Title Attribulte</option>
          {type.blueprint.map((field) => (
            <option key={field.id} value={field.fieldName}>
              {field.fieldName}
            </option>
          ))}
        </Select>
      </div>
      <h4 className="my-3 px-2">Attributes</h4>
      <div className="border-t p-2 px-4 rounded-b mb-8">
        <MachineTypeFields fields={type.blueprint} typeId={type.id} />
        <AddNewField addField={handleAddField} />
      </div>
    </div>
  );
};

interface Props {
  type: IMachineType;
}

export default MachineTypeComponent;
