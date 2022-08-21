export const styleClass = (id: string, activeMenu: string) => {
    const baseStyles = 'uppercase text-sm mr-5 py-2 px-3 transition ease-in-out hover:font-bold hover:underline';
    if (activeMenu === id) return `${baseStyles} font-bold underline`;
    return baseStyles;
}