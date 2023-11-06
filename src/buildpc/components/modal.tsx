

import { Product } from "@/products/interfaces/product"
import { getGroups, getProductDetailsBySlug } from "@/products/services/productServices"
import { Table } from "./table"
import { BtnModal } from "./buttons"


export const Modal = async ({ prod }: { prod: Product }) => {

    const [prodDetail, groups] = await Promise.all([
        getProductDetailsBySlug({ slug: '_' + prod.id_producto }),
        getGroups()
      ]);


    const validGroups: number[] = []
    prodDetail && prodDetail.caracteristicas && prodDetail.caracteristicas.map(carac =>
        groups.filter(group => {
            if (group.id === carac.id_agrupador) {
                if (!validGroups.includes(group.id)) {
                    validGroups.push(group.id)
                }
            }
        })
    )
   

    return (
        <>
            <BtnModal id={prod.id_producto}/>
            <div
                data-te-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id={`modalProduct${prod.id_producto}`}
                // tabindex="-1"
                aria-labelledby="modalProductLabel"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref={true}
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]">

                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">

                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h2
                                className="p-2 text-lg font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="modalProductLabel">
                                {prod.nombre}
                            </h2>

                            <span className="absolute right-3 top-5 flex justify-end">
                                <svg className="cursor-pointer" data-te-modal-dismiss height="7%" viewBox="0 0 24 24" width="7%" fill="#000" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.475 17 12 13.475 15.525 17 17 15.525 13.475 12 17 8.475 15.525 7 12 10.525 8.475 7 7 8.475 10.525 12 7 15.525ZM12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Z"></path></svg>
                            </span>



                        </div>


                        <div className="relative grid grid-cols-2  gap-4">

                        {
                                groups.map((group, i) => {

                                    if (!validGroups.includes(group.id)) {
                                        return
                                    }
                                    return (

                                        <div key={i} className="h-auto">
                                            <Table group={group} prodDetail={prodDetail} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
