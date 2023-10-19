/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useQueryParams } from "@/hooks/useQueryParams"

export const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const { url } = useQueryParams('criterio', search)
    
    useEffect(() => {
        if (search === '') return;
        router.push(url)
    }, [search])

    const debounceRef = useRef<NodeJS.Timeout>()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            setSearch(e.target.value)
        }, 1500)
    }

    return (
        <div className="relative  w-[24.7rem]" data-te-input-wrapper-init>
            <input
                type="search"
                onChange={(e) => handleSearch(e)}
                className="peer block min-h-[auto] w-full rounded border-2 border-solid focus:border-red-500 bg-white px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="search"
                placeholder="Buscar producto" />
            <label
                htmlFor="search"
                className={`${search !== '' && '-translate-y-[1.4rem] scale-[0.8] bg-white px-1 -ml-2 '} pointer-events-none  absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.8] peer-focus:text-[#fd611a] peer-focus:px-1 peer-focus:-ml-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
            >Buscador</label
            >
            {
                search === '' &&
                <span
                    className="absolute top-2 right-0 input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2">
                    <svg
       
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            }
        </div>
    )
}
