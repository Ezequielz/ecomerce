'use client'
import { MdOutlineViewList, MdOutlineViewModule } from 'react-icons/md';


import { useEffect } from "react";

export const OptionsShow = () => {
    useEffect(() => {
        const init = async () => {
            const { Select, initTE } = await import("tw-elements");
            initTE({ Select });
        };
        init();
    }, []);
    return (
        <header className="w-full bg-white p-2 mb-3 flex justify-between items-center">
            <div className="w-1/3">
                <select data-te-select-init >
                    <option value="1">Mayor precio</option>
                    <option value="2">Menor precio</option>
                    <option value="3">Destacados</option>
                    <option value="4">Todos</option>
                </select>
                <label data-te-select-label-ref>Ordenar por</label>

            </div>
            <div className='flex text-xl text-[#fd611a] gap-2 items-center'>
                <MdOutlineViewModule />
                <MdOutlineViewList />

            </div>
        </header>
    )
}
