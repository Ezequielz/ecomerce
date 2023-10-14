

// import { useEffect } from "react";
import { getCategories, getFilters } from "../services/productServices";
// import { useFilters } from "../hooks/useFilters";
// import { useCategories } from "../hooks/useCategories";

export const Sidebar = async() => {

    // const { isLoading: isLoadingFilters, filters: allFilters } = useFilters();
    // const { isLoading: isLoadingCategories, categories } = useCategories();
    const allFilters = await getFilters()
    const categories = await getCategories()

    const notShow = ['11','23','13', '18','16', '20','28','17','12','27']
    const filters = allFilters.filter(filt => !notShow.includes(filt.id.toString()))
    filters.sort((a, b) => a.orden.toString().localeCompare(b.orden.toString()))

    // useEffect(() => {
    //     const init = async () => {
    //         const { Collapse, initTE } = await import("tw-elements");
    //         initTE({ Collapse });
    //     };
    //     init();
    // }, []);
    return (

        <div id="accordionExample" className="w-1/4 pt-4">
            <ul
                className="rounded-b-lg border border-t-0 border-neutral-200 ">
                {
                    filters.map(filter => {
                        const categoriesToFilter = categories.filter(cate => filter.id === cate.id_agrupador)
                        return (
                            <li key={filter.id}>

                                <button
                                    className="group relative flex w-full items-center border-0 bg-white px-2 py-1 text-left text-sm text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-collapse-collapsed
                                    aria-expanded="false"
                                    data-te-target={`#collapse${filter.id}`}
                                    aria-controls={`collapse${filter.id}`}>
                                    {filter.nombre}
                                    <span
                                        className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>


                                <ul
                                    className="!visible hidden relative m-0 list-none p-0 "
                                    data-te-collapse-item
                                    // data-te-collapse-show
                                    data-te-sidenav-link-ref
                                    id={`collapse${filter.id}`}
                                    aria-labelledby={filter.id.toString()}
                                >

                                    {
                                        categoriesToFilter.map(cate => {
                                            // if (cate.banners_sub_categorias !== null)
                                            return (

                                                <li className="cursor-pointer  px-2 " key={cate.id}>
                                                    <h3 data-te-sidenav-link-ref
                                                        className="hover:bg-black hover:opacity-50 hover:text-white opacity-50 rounded-lg text-sm px-5 m-1">
                                                        - {cate.nombre}

                                                    </h3>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </li>

                        )
                    })
                }



            </ul>

        </div>



    )
}
