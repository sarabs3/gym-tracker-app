import React, { ChangeEvent, FC } from 'react';
import Input from '../../../components/FormElements/Input';
import { ReactComponent as DeleteIcon} from '../../../assets/icons/delete.svg';
import AddNewField from './../components/AddNewField';
import { FieldTypes, IMachineType } from '../../../types/machine';
import MachineTypeFields from '../MachineTypeFields';
import Select from '../../../components/FormElements/Select';

const MachineTypeComponent: FC<Props> = ({
    type,
    addField,
    handleTitleChange,
    deleteType,
    handleChange
}) => {

    const deleteFieldType = () => {
        deleteType(type.id);
    };
    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e, type.id);
    };
    const handleAddField = (val: FieldTypes) => {
        addField(type.id, val)
    };
    const handleTitleAttributeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleTitleChange(e, type.id);
    };

    return (
        <div className='flex flex-col relative m-2 border rounded transition ease-in-out bg-white rounded-lg md:w-[calc(50%-1rem)] xl:w-[calc(33%-1rem)]' key={type.id}>
            <div className='flex bg-gray-300 justify-between p-2 items-center font-bold rounded-t'>
                <span>{type.type}</span>
                <DeleteIcon onClick={deleteFieldType} width={32} className="cursor-pointer" />
            </div>
            <div className='border-b p-2 bg-gray-50 px-4'>
                <Input onChange={handleTypeChange} id='type' name='Object Type' value={type.type} />
                <Select id="title" name="Title Attribute" value={type.title} onChange={handleTitleAttributeChange}>
                    {type.blueprint.map(field => <option key={field.id} value={field.fieldName}>{field.fieldName}</option>)}
                </Select>
            </div>
            <h4 className='my-3 px-2'>Attributes</h4>
            <div className='border-t p-2 px-4 rounded-b mb-8'>
                <MachineTypeFields fields={type.blueprint} typeId={type.id} />
                <AddNewField addField={handleAddField} />
            </div>
        </div>
    )
};

interface Props {
    type: IMachineType;
    addField: (id:string, type: FieldTypes) => void;
    handleTitleChange: (e: ChangeEvent<HTMLSelectElement>, id: string) => void
    deleteType: (id: string) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
};

export default MachineTypeComponent;
