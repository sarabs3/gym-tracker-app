import { FC, ReactNode } from "react";

const PageHeading: FC<Props> = ({ children }) => (
    <div className='flex flex-col md:flex-row justify-between items-center border-b-2 mb-4 py-2 border-dotted'>
        {children}
    </div>
);

interface Props {
    children: ReactNode;
};
export default PageHeading;
