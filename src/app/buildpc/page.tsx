/* eslint-disable @next/next/no-img-element */

import { AsideForBuild } from "@/buildpc/components/aside"
import { BuildList } from "@/buildpc/components/buildList"
import { ButtonsForBuild } from "@/buildpc/components/buttons"
import { Suspense } from "react"


interface Props {
    params: {
        slug: string
    }
    searchParams?: { [key: string]: string | undefined }
}


export default async function BuildPC({ params: { slug }, searchParams }: Props) {
    const paso = searchParams?.paso && searchParams.paso
    const tipo = searchParams?.tipo && searchParams.tipo
    
    const urlImg = 'https://imagenes.compragamer.com/assets/marcas-sponsor/'
   
    return (
        <section className="px-36 py-5">
            <header>
                <h2 className="text-xl font-semibold">Elegi tu Procesador</h2>
                <div className="flex flex-row items-center">
                    <p className="mt-5">
                        Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.
                    </p>
                    {
                        tipo &&
                        <img src={`${urlImg}${tipo === '48' ? 'intel.png': 'amd.png'}`} alt="" />
                    }
                </div>
            </header>

            <div className="flex flex-row mt-5 gap-2">

                <AsideForBuild paso={paso} />

                <section className="w-2/3">
                    <ButtonsForBuild tipo={tipo} paso={paso} />

                    <Suspense fallback={<div>cargando...</div>}>
                     <BuildList searchParams={searchParams}/>
                    </Suspense>

                </section>
            </div>
        </section>
    )
}