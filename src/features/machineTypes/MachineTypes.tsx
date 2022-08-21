import { useAppSelector } from '../../app/hooks';
import { selectTypes } from './MachineTypesSlice';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MachineTypes = () => {
    const [activeMenu, setActiveMenu] = useState('manage');
    const types = useAppSelector(selectTypes);
    const params = useParams();
    const styleClass = (id?: string) => {
        const baseStyles = 'uppercase text-sm mr-5 py-2 px-3 transition ease-in-out hover:font-bold hover:underline';
        if (activeMenu === id) return `${baseStyles} font-bold underline`;
        return baseStyles;
    }
    useEffect(() => {
        if (params.id) {
            setActiveMenu(params.id);
        } else {
            setActiveMenu('manage');
        }
    }, [params.id]);
    return (
        <div className='container mx-auto mt-10'>
            <nav className='my-1'>
                <Link className={styleClass('manage')} to={`/types/manage`}>Manage Types</Link>
                <Link className={styleClass('all')} to={`/types/all`}>All</Link>
                {types.map((type) => (
                    <Link className={styleClass(type.id)} to={`/types/${type.id}`} key={type.id}>{type.type}</Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
};

export default MachineTypes;
