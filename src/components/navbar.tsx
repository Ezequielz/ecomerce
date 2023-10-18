'use client'

import { useEffect } from "react";
import { Drawer } from "./drawer";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown });
        };
        init();
    }, []);
    return (
        <nav
            className="relative bg-[#fd611a] p-5 text-sm">

                <ul
                    className="mr-auto flex flex-col pl-0 lg:flex-row gap-[4.83rem] items-center justify-center w-full">
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <Link
                            className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                            href="/product"
                            data-te-nav-link-ref
                        >PRODUCTOS
                        </Link>
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#"
                            data-te-nav-link-ref
                        >ARMÁ TU PC</a
                        >
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#"
                            data-te-nav-link-ref
                        >AYUDA</a
                        >
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#"
                            data-te-nav-link-ref
                        >MARCAS SPONSOR</a
                        >
                    </li>
                </ul>

        </nav>
    )
}
