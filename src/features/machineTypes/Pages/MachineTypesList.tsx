import React, { useState } from "react";
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectTypes, addNew } from "../MachineTypesSlice";
import PageHeading from "../../../components/PageHeading";
import NoMachines from "../../../components/NoMachines";
import { lang } from "../../../lang";
import ExercisesList from "../components/ExercisesList";
import Input from "../../../components/FormElements/Input";
import { useNavigate } from "react-router-dom";

const MachineTypesList = () => {
  const types = useAppSelector(selectTypes);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>('');
  const navigate = useNavigate();
  const AddNew = () => {
    dispatch(addNew({ name: folderName }));
    setIsOpen(false);
    setFolderName('');
  };
  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
  };
  return (
    <div className="bg-gray-100 mb-5 py-3 px-5">
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customModalStyles}>
        <div className="flex flex-col">
          <Input
            id="Folder Name"
            name="Folder Name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button className="btn-primary" onClick={AddNew}>Create Folder</button>
        </div>
      </Modal>
      <PageHeading>
        <div className="uppercase text-xs">
          <span className="ml-2">Total Folders:</span>
          <span className="font-bold uppercase text-sm"> {types.length} </span>
        </div>
      </PageHeading>
      {types.length === 0 && (
        <NoMachines>
          <p className="text-sm">Add new {lang.app}</p>
        </NoMachines>
      )}
      <div className="flex flex-wrap rounded flex-col md:flex-row">
      <h4 className="font-bold">Folders</h4>
      <div
      className="my-2 p-3 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
      onClick={() => navigate('/exercises')}
    >
      Exercises
      </div>

        {types.map((type) => (
          <ExercisesList type={type} key={type.id} />
        ))}
        <button onClick={() => setIsOpen(true)} className="btn-primary md:hidden">
          Add New Folder
        </button>
      </div>
    </div>
  );
};

export default MachineTypesList;
