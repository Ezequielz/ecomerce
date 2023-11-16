import React, { Suspense } from 'react'
import { CardSkelleton } from './cardSkelleton'
import { Card } from './card'
import { getProductsToBuild } from '../services/buildServices'


interface Props {
    searchParams?: { [key: string]: string | undefined }
}

export const BuildList = async({searchParams}: Props) => {
    const products: any = await getProductsToBuild({ searchParams })
    return (
        <ul
            className=" grid grid-cols-2  gap-2  "
        >
            {
                products.map((prod: any) => (
                    <li key={prod.id_producto} >
                        <Suspense fallback={<CardSkelleton />}>

                            <Card product={prod} />

                        </Suspense>
                    </li>
                ))
            }
        </ul>
    )
}
