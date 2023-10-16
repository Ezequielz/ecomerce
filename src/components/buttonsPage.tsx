/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useQueryParams } from "@/hooks/useQueryParams";



export const ButtonsPage = ({ products }: { products: number }) => {
    console.log('Products', products)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pageParam = searchParams.get('page') || 0
    const [currentPage, setPage] = useState(+pageParam)
    const { url } = useQueryParams('page', (currentPage).toString())

    useEffect(() => {
        if(products === 0){
            // router.push((+pageParam - 1).toString())
        }
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
            <ul className="list-style-none flex">
                <li >
                    <button
                        disabled={currentPage === 0}

                        onClick={prev}
                        className=" relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    >Previous

                    </button>
                </li>


                <li  >
                    <button
                        disabled={products < 20}
                        onClick={next}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    >Next

                    </button>
                </li>
            </ul>
        </nav>
    )
}
