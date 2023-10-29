'use client'

import { useEffect } from "react";
import Link from "next/link";
import { Modal } from '../buildpc/components/modal';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown,Modal, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown, Modal });
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
                    <Link
                        className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="/buildpc"
                        data-te-nav-link-ref
                    >ARMÁ TU PC
                    </Link>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <Link
                        className="text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="/help"
                        data-te-nav-link-ref
                    >AYUDA
                    </Link>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <div className="relative" data-te-dropdown-ref>
                        <button
                            className="flex items-cent text-neutral-800 transition duration-200 hover:text-slate-100 hover:ease-in-out focus:text-slate-100 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                            type="button"
                            id="dropdownMenuButton1"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false"

                        >
                            MARCAS SPONSOR

                        </button>
                        <ul
                            className="absolute z-[1000] p-2.5 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton1"
                            data-te-dropdown-menu-ref>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/wd.png" alt="" />
                            </li>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/nvidia.png" alt="" />
                            </li>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/intel.png" alt="" />
                            </li>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/amd.png" alt="" />
                            </li>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/rog.png" alt="" />
                            </li>
                            <li className="p-2">
                                <img src="https://imagenes.compragamer.com/assets/marcas-sponsor/hyperx.png" alt="" />
                            </li>

                        </ul>
                    </div>
                </li>
            </ul>

        </nav>
    )
}
