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
        <div className='p-10 m-2 border' key={type.id}>
            <DeleteIcon onClick={deleteFieldType} width={32} />
            <Input onChange={handleTypeChange} id='type' name='type' value={type.type} />
            <Select id="Title" name="title" value={type.title} onChange={handleTitleAttributeChange}>
                {type.blueprint.map(field => <option key={field.id} value={field.fieldName}>{field.fieldName}</option>)}
            </Select>
            <h4>Fields</h4>
            <MachineTypeFields fields={type.blueprint} typeId={type.id} />
            <AddNewField addField={handleAddField} />
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
