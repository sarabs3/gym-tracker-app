import React, { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateFieldName, deleteAttribute } from './MachineTypesSlice';
import CreateAttribute from './components/CreateAttribute';
import { FieldTypes, IBlueprintItem } from '../../types/machine';

interface Props {
    fields: IBlueprintItem[];
    typeId: string
};

const MachineTypeFields: FC<Props> = ({ fields, typeId }) => {
    const dispatch = useAppDispatch();
    const onNameChange = (key: string, value: string, fieldId: string, id: string) => {
        if (value === FieldTypes.delete) {
            dispatch(deleteAttribute({ key, fieldId, id }));
        }
        dispatch(updateFieldName({ key, value, fieldId, id }));
    }
    if (fields?.length <= 0) return null;
    return (
        <>
            {fields.map(field => (
                <div key={field.id}>
                    <CreateAttribute
                        onNameChange={(key, val) => onNameChange(key, val, field.id, typeId)}
                        name={field.fieldName}
                        type={field.fieldType}
                    />
                </div>
            ))}
        </>
    )
};

export default MachineTypeFields;
