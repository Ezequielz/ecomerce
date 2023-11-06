/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useQueryParams } from "@/hooks/useQueryParams"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const hardware = [
    {
        id: 1,
        img: ['cpu1.png', 'cpu2.png']
    },
    {
        id: 2,
        img: ['mother1.png', 'mother2.png']
    },
    {
        id: 3,
        img: ['cooler1.png', 'cooler2.png']
    },
    {
        id: 4,
        img: ['memo1.png', 'memo2.png']
    },
    {
        id: 5,
        img: ['gpu1.png', 'gpu2.png']
    },
    {
        id: 6,
        img: ['hhd1.png', 'hhd2.png']
    },
    {
        id: 7,
        img: ['poder1.png', 'poder2.png']
    },
    {
        id: 8,
        img: ['gabo1.png', 'gabo2.png']
    },
    {
        id: 9,
        img: ['moni1.png', 'moni2.png']
    },
    {
        id: 10,
        img: ['periferico1.png', 'periferico2.png']
    }
]

interface Build {
    paso: string
    prod: string[]
}
export const AsideForBuild = ({ paso }: { paso?: string | undefined }) => {
    const [newPaso, setNewPaso] = useState('')
    const router = useRouter()
    const { url } = useQueryParams('paso', newPaso)
    const urlImg = 'https://compragamer.com/PatchRouterSection/assets/img/arma-pc/'
    // useEffect(() => {
    //     if (paso){
    //         setNewPaso(paso)
    //     }
    // }, [paso])
    const build: Build[] = localStorage.getItem('pcbuild') ? JSON.parse(localStorage.getItem('pcbuild')!) : []
    

    useEffect(() => {
        console.log('aside')
        router.push(url)
    }, [newPaso])




    return (
        <aside className="w-1/3    h-full">
            <section className="bg-white grid grid-cols-2 gap-2 py-6 justify-center items-center rounded-sm shadow-lg">
                {
                    hardware.map(hard => (
                        <button key={hard.id} onClick={() => setNewPaso(p => p = hard.id.toString())} className="flex justify-center">
                            <img className="w-14 h-14" src={`${urlImg}${paso !== hard.id.toString() ? hard.img[0] : hard.img[1]}`} alt="" />
                        </button>

                    ))
                }

            </section>

            <div className="grid grid-cols-2 gap-2 justify-center items-center bg-white mt-2 rounded-sm shadow-lg p-3  text-center text-sm">
                <span>(100 watts)</span>
                <span>Total : $ 124.234</span>

                <div className="relative flex flex-row m-auto">

                    <button className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
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

                        <button className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
                            REINICIAR
                        </button>
                    </div>



                </div>


                <div className="relative flex flex-row m-auto">

                    <button className="bg-white hover:bg-slate-100 text-[#fd611a] py-2 px-4 border-[1px] border-[#fd611a] rounded-[12px]  text-xs font-semibold flex gap-2 justify-center items-center  ">
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
