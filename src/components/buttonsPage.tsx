'use client'

import Link from "next/link"
import { FC, useState } from "react"

interface Props {
    page? : number
}

export const ButtonsPage:FC<Props> = ({page = 0}) => {
    const [Page, setPage] = useState(page)

    return (
        <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
                <li>
                    <Link
                        onClick={() =>setPage(Page - 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href={`?page=${Page - 1}`}
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
                        onClick={() =>setPage(Page + 1)}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href={`?page=${Page + 1}`}
                    >Next
                    </Link>

                </li>
            </ul>
        </nav>
    )
}
