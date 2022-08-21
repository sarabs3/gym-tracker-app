import { useAppSelector } from '../../app/hooks';
import { selectTypes } from './MachineTypesSlice';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ReactComponent as MenuIcon} from '../../assets/icons/hamburger.svg'
import useWindowSize from '../../hooks/useWindowResize';
import { Size } from '../../types/machine';

const MachineTypes = () => {
    const [activeMenu, setActiveMenu] = useState('manage');
    const size: Size = useWindowSize();
    const [showMenu, setShowMenu] = useState(false);
    const types = useAppSelector(selectTypes);
    const [isMobile, setIsMobile] = useState(false);
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

    useEffect(() => {
        if (!size || !size.width) return;
        if (size?.width < 1024) {
            setShowMenu(false);
            setIsMobile(true);
        } else {
            setShowMenu(true);
            setIsMobile(false);
        }
    }, [size]);
    return (
        <div className='container mx-auto md:mt-10'>
        {isMobile && <div className='flex justify-between'><h2 className='text-lg pl-5'>Manage</h2><MenuIcon className='pr-2' onClick={() => setShowMenu(!showMenu)} /></div>}
            {showMenu && <nav className='my-1 flex flex-col lg:flex-row'>
                <Link className={styleClass('manage')} to={`/types/manage`}>Manage Types</Link>
                <Link className={styleClass('all')} to={`/types/all`}>All</Link>
                {types.map((type) => (
                    <Link className={styleClass(type.id)} to={`/types/${type.id}`} key={type.id}>{type.type}</Link>
                ))}
            </nav>}
            <Outlet />
        </div>
    )
};

export default MachineTypes;
