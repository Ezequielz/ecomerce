/* eslint-disable @next/next/no-img-element */

import { AsideForBuild } from "@/buildpc/components/aside"
import { BuildList } from "@/buildpc/components/buildList"
import { ButtonsForBuild } from "@/buildpc/components/buttons"
import { HeaderBuildPc } from "@/buildpc/components/header"
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
    
   
   
    return (
        <section className="px-36 py-5">

            <HeaderBuildPc/>
            <div className="flex flex-row mt-5 gap-2">

                <AsideForBuild  />

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