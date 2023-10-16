/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter } from 'next/navigation'
import { MdOutlineViewList, MdOutlineViewModule } from 'react-icons/md';
import { useEffect, useState } from "react";
import { useQueryParams } from '@/hooks/useQueryParams';



export const OptionsShow = () => {

    const router = useRouter()
    const [select, setSelect] = useState('')
    const { url } = useQueryParams('order', select)

    useEffect(() => {
        if (select === '') return;
        // router.push(`/?order=${select}`)
        router.push(url)
    }, [select])

    useEffect(() => {
        const init = async () => {
            const { Select, initTE } = await import("tw-elements");
            initTE({ Select });
        };
        init();
    });
    return (
        <header className="w-full bg-white p-2 mb-3 flex justify-between items-center">
            <select 
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="w-1/3 block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-[#fd611a]  "
            >
                
                <option selected value="">Destacados</option>
                <option value="0">Mayor precio</option>
                <option value="1">Menor precio</option>
                <option value="2">Nombre</option>

            </select>
            <div className='flex text-xl text-[#fd611a] gap-2 items-center'>
                <MdOutlineViewModule />
                <MdOutlineViewList />

            </div>
        </header>
    )
}
