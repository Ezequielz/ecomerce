/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter } from 'next/navigation'
import { MdOutlineViewList, MdOutlineViewModule } from 'react-icons/md';
import { useEffect, useState } from "react";
import { useQueryParams } from '@/hooks/useQueryParams';



export const OptionsShow = () => {

    const router = useRouter()
    const [select, setSelect] = useState('default')
    const { url } = useQueryParams('sort', select)

    useEffect(() => {
        if (select.trim().length === 0) return;
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
        <header className="w-full bg-white p-2 mb-3 flex justify-between items-center rounded-lg border-solid border-2 shadow-sm">
            <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="w-1/3 block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-[#fd611a]  "
                placeholder='ordenar por'
            >
                {
                    select === 'default'
                        ? (
                            <option selected value="default"  >Ordenar por</option>

                        )
                        : (

                            <option value="0">Default</option>
                        )

                }
                <option value="1">Mayor precio</option>
                <option value="2">Menor precio</option>


            </select>
            <div className='flex text-xl text-[#fd611a]  items-center'>
                <button className='text-[#fd611a] hover:bg-slate-100  py-1 px-1 rounded-md  font-semibold '>
                    <MdOutlineViewModule />

                </button>
                <button className='text-[#fd611a] hover:bg-slate-100  py-1 px-1 rounded-md  font-semibold '>
                    <MdOutlineViewList />

                </button>

            </div>
        </header>
    )
}
