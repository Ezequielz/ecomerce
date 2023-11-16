/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useQueryParams } from "@/hooks/useQueryParams"
import { useBuildPCStore } from "@/store/buildPC"
import { useRouter } from "next/navigation"
import { useEffect } from 'react';





export const AsideForBuild = () => {
    const { build, hardware, watts, paso, tipo,
         nextPaso, prevPaso, customPaso, resetProductsBuild } = useBuildPCStore(state => state)

    const router = useRouter()
    const { url } = useQueryParams('paso', paso)
    const { url: url2 } = useQueryParams('tipo', tipo?.toString() || '')
    const urlImg = 'https://compragamer.com/PatchRouterSection/assets/img/arma-pc/'

    let totalPrice = 0

    if (Object.values(build).length > 0) {
        Object.values(build).forEach((items: any) => {
            items.forEach((item: any) => {

                if (item.precioEspecial) {
                    totalPrice += item.precioEspecial;
                }

            });
        });
    }

    useEffect(() => {
        const init = async () => {
            const { Tooltip, initTE } = await import("tw-elements");
            initTE({ Tooltip });
        };
        init();
    }, [build]);

    useEffect(() => {

        router.push(url)
    }, [paso])

    useEffect(() => {
        router.push(url2)
    }, [tipo])
    




    const handleReset = () => {
        resetProductsBuild()
    }



    return (
        <aside className="w-1/3    h-full">
            <section className="bg-white grid grid-cols-2 gap-2 py-6 justify-center items-center rounded-sm shadow-lg">

                {
                    Object.values(build).map((hard, i) => {

                        let objectNames = ''

                        hard.map((h: any) => {

                            h.nombre
                            objectNames = objectNames + h.nombre + '\n'
                        })



                        return (
                            <button
                                key={i}
                                className="h-fit w-max flex justify-center relative"
                                onClick={() => customPaso((i + 1).toString())}
                            >


                                {
                                    hard.length >= 2 &&


                                    <div data-te-toggle="tooltip"
                                        data-te-html="true"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        title={objectNames}
                                        style={{ border: '1px solid red' }}
                                        className="absolute top-0 right-5 flex items-center justify-center w-6 h-6 text-xs font-bold text-red-500 rounded-full">
                                        {hard.length}
                                    </div>


                                }

                                {
                                    hard.length < 1 ? (

                                        <img className="w-14 h-14" src={`${urlImg}${+paso !== hardware[i].id ? hardware[i].imgDefault[0] : hardware[i].imgDefault[1]}`} alt="" />
                                    )
                                        : (

                                            <img className="w-14 h-14" src={`https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${hard[0].imagenes[0].nombre}-mini.jpg`} alt="" />
                                        )
                                }
                            </button>
                        )
                    })
                }

            </section>

            <div className="grid grid-cols-2 gap-2 justify-center items-center bg-white mt-2 rounded-sm shadow-lg p-3  text-center text-sm">
                <span>({watts} watts)</span>
                <span>Total : {totalPrice.toLocaleString('es-ar', {
                    currency: 'ARS',
                    style: 'currency',
                    maximumSignificantDigits: 8
                })}</span>

                <div className="relative flex flex-row m-auto">

                    <button onClick={prevPaso} className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
                        VOLVER ATRÁS
                    </button>

                    <button

                        data-te-ripple-init
                        data-te-dropdown-toggle-ref
                        id="drop_button_1"
                        className=" hover:bg-slate-100  border-[1px] rounded-r-[40px] border-[#fd611a] border-l-0  focus:ring-4 focus:outline-none font-medium  py-2.5 text-center inline-flex items-center "
                    >

                        <svg className="w-2.5 h-2.5 mx-2" aria-hidden="true" fill="" viewBox="0 0 10 6"  >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div
                        className="absolute z-[1000] mr-96  hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="drop_button_1"
                        data-te-dropdown-menu-ref>

                        <button onClick={handleReset} className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
                            REINICIAR
                        </button>
                    </div>



                </div>


                <div className="relative flex flex-row m-auto">

                    <button onClick={nextPaso} className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
                        SALTAR PASO
                    </button>




                    <button

                        data-te-ripple-init
                        data-te-dropdown-toggle-ref
                        id="drop_button_2"
                        className=" hover:bg-slate-100  border-[1px] rounded-r-[40px] border-[#fd611a] border-l-0  focus:ring-4 focus:outline-none font-medium  py-2.5 text-center inline-flex items-center "
                    >

                        <svg className="w-2.5 h-2.5 mx-2" aria-hidden="true" fill="" viewBox="0 0 10 6"  >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div
                        className="absolute z-[1000] mr-96  hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="drop_button_2"
                        data-te-dropdown-menu-ref>

                        <button className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
                            FINALIZAR
                        </button>
                    </div>



                </div>



            </div>
        </aside>
    )
}
