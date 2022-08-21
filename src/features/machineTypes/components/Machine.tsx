import { ChangeEvent, FC } from 'react';
import { ReactComponent as DeleteIcon} from '../../../assets/icons/delete.svg';
import Input from '../../../components/FormElements/Input';
import { IMachine } from '../../../types/machine';

const Machine:FC<Props> = ({ machine, machineDelete, handleChange, titleField }) => {
    const getTitleFieldValue = machine.fields.find(field => field.fieldName === titleField);
    return (
        <div className='my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300' key={machine.id}>
            <div className='mb-2 flex bg-gray-300 justify-between p-2 items-center font-bold rounded-t'>
                <span>{getTitleFieldValue?.fieldValue}</span>
                <DeleteIcon onClick={() => machineDelete(machine.id)} width={32} className="cursor-pointer" />
            </div>
            <div className="px-10">
                {machine.fields.map(field => (
                    <div key={field.id}>
                        <Input
                            onChange={(e) => handleChange(e, machine.id, field.id)}
                            id={machine.id+field.id}
                            type={field.fieldType}
                            name={field.fieldName}
                            value={field.fieldValue}
                        />
                    </div>
                ))}
            </div>
        </div>)
};

interface Props {
    machine: IMachine;
    titleField: string | undefined;
    machineDelete: (id: string) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>, id: string, fieldId: string) => void;
}

export default Machine;
