import { ChangeEvent, FC } from 'react';
import { ReactComponent as DeleteIcon} from '../../../assets/icons/delete.svg';
import Input from '../../../components/FormElements/Input';
import { IMachine } from '../../../types/machine';

const Machine:FC<Props> = ({ machine, machineDelete, handleChange }) => {
    return (
        <div className='p-10 my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-t-8 hover:border-blue-300' key={machine.id}>
            <DeleteIcon onClick={() => machineDelete(machine.id)} width={32} className="delete-icon" />
            {machine.fields.map(field => (
                <div key={field.id}>
                    <Input
                        onChange={(e) => handleChange(e, machine.id, field.id)}
                        id={field.fieldName}
                        type={field.fieldType}
                        name={field.fieldName}
                        value={field.fieldValue}
                    />
                </div>
            ))}
        </div>)
};

interface Props {
    machine: IMachine;
    machineDelete: (id: string) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>, id: string, fieldId: string) => void;
}

export default Machine;
