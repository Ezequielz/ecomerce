'use client'

import Link from "next/link"
import { useState, useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'



export const ButtonsPage = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()!  
    const pageParam = searchParams.get('page') || 0
    const [Page, setPage] = useState(0)

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    //   console.log(pathname + '?' + createQueryString('page', '10'))
    useEffect(() => {

        setPage(+pageParam)

    }, [pageParam])

    return (
        <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
                <li>
                    <Link
                        onClick={() => setPage(+Page - 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href={`${pathname + '?' + createQueryString('page', (Page - 1).toString())}`}
                    >Previous
                    </Link>
                </li>
                {/* <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                    >1</a
                    >
                </li>
                <li aria-current="page">
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                    >2</a
                    >
                </li>
                <li>
                    <Link
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="/?qwe=qwe"
                    >3</Link>
                </li> */}
                <li>
                    <Link
                        onClick={() => setPage(Page + 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href={`${pathname + '?' + createQueryString('page', (Page + 1).toString())}`}
                    >Next
                    </Link>

                </li>
            </ul>
        </nav>
    )
}
