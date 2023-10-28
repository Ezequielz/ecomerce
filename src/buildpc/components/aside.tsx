/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useQueryParams } from "@/hooks/useQueryParams"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const hardware = [
    {
        id: 1,
        img: ['cpu1.png','cpu2.png']
    },
    {
        id: 2,
        img: ['mother1.png','mother2.png']
    },
    {
        id: 3,
        img: ['cooler1.png','cooler2.png']
    },
    {
        id: 4,
        img: ['memo1.png','memo2.png']
    },
    {
        id:5,
        img: ['gpu1.png','gpu2.png']
    },
    {
        id: 6,
        img: ['hhd1.png','hhd2.png']
    },
    {
        id: 7,
        img: ['poder1.png','poder2.png']
    },
    {
        id: 8,
        img: ['gabo1.png','gabo2.png']
    },
    {
        id: 9,
        img: ['moni1.png','moni2.png']
    },
    {
        id: 10,
        img: ['periferico1.png','periferico2.png']
    }
]

export const AsideForBuild = ({paso} : {paso?: string | undefined}) => {
    const [newPaso, setNewPaso] = useState('')
    const router = useRouter()
    const { url } = useQueryParams('paso', newPaso)
    const urlImg = 'https://compragamer.com/PatchRouterSection/assets/img/arma-pc/'
    useEffect(() => {
        if (paso){
            setNewPaso(paso)
        }
    }, [paso])
    

    useEffect(() => {
        router.push(url)
    }, [newPaso])

   
    
    
    return (
        <aside className="w-1/3 bg-white p-3 shadow-lg rounded-sm h-full">
            <section className="grid grid-cols-2 gap-2 justify-center items-center ">
                {
                    hardware.map( hard => (
                        <button key={hard.id} onClick={() => setNewPaso( p => p = hard.id.toString())} className="flex justify-center">
                            <img className="w-14 h-14" src={`${urlImg}${paso !== hard.id.toString() ? hard.img[0] : hard.img[1]}`} alt="" />
                        </button>

                    ))
                }

            </section>
        </aside>
    )
}
