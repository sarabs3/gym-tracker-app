import { useAppSelector } from '../../app/hooks';
import { selectTypes} from './MachineTypesSlice';
import { Link, Outlet, useParams } from 'react-router-dom';

const MachineTypes = () => {
    const types = useAppSelector(selectTypes);
    const params = useParams();
    const styleClass = (id?: string) => {
        const isAll = !params.id && !id;
        if (isAll) return "mr-5 py-2 px-4 border rounded bg-blue-400";
        if(id) {
            return `mr-5 py-2 px-4 border rounded ${id === params.id && 'bg-blue-400'}`
         }
         return `mr-5 py-2 px-4 border rounded bg-blue-400`;
        }
    return (
        <div className='container'>
            <nav className='my-4'>
                <Link className={styleClass()} to={`/types`}>All</Link>
                {types.map((type) => (
                    <Link className={styleClass(type.id)} to={`/types/${type.id}`} key={type.id}>{type.title}</Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
};

export default MachineTypes;
