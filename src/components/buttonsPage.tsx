/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useQueryParams } from "@/hooks/useQueryParams";



export const ButtonsPage = ({ products }: { products: number }) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const pageParam = searchParams.get('page') || 0
    const [currentPage, setPage] = useState(+pageParam)
    const { url } = useQueryParams('page', (currentPage).toString())

    useEffect(() => {
        setPage(+pageParam)

    }, [pageParam])

    useEffect(() => {
        if (pageParam === currentPage) return;
        // router.push(`/?order=${select}`)
        router.push(url)
    }, [currentPage])

    const next = () => {
        const nextPage = currentPage + 1
        setPage(nextPage)
    }
    const prev = () => {

        const prevPage = currentPage - 1
        setPage(prevPage)
    }



    return (
        <nav aria-label="Page navigation example">
            <ul className="list-style-none flex gap-1">
                <li >
                    <button
                        disabled={currentPage === 0}
                        onClick={prev}
                        className={`${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-100 hover:text-[#fd611a] hover:border-2 hover:border-solid hover:border-[#fd611a]'} relative block rounded bg-[#fd611a] px-3 py-1.5 text-sm text-white transition-all duration-300 `}
                    >Previous

                    </button>
                </li>


                <li  >
                    <button
                        disabled={products < 20}
                        onClick={next}
                        className={`${products < 20 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-100 hover:text-[#fd611a] hover:border-2 hover:border-solid hover:border-[#fd611a]'} relative block rounded bg-[#fd611a] px-3 py-1.5 text-sm text-white transition-all duration-300 `}
                    >Next

                    </button>
                </li>
            </ul>
        </nav>
    )
}
