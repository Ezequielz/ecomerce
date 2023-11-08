import { Auriculare, CPU, Coolercpu, Coolerfan, Fuente, Gab, HD, Mem, Monitore, Mother, Mouse, Mousepad, Teclado, Video } from '@/buildpc/interfaces/buildpc';
import { type Product } from '@/products/interfaces/product';
import { ProductDetail } from '@/products/interfaces/productDetail';
import { create } from 'zustand'

interface ProductBuild extends Product {
    paso: string

}

type Perifericos = {
    auriculares?: Auriculare[];
    teclados?:    Teclado[];
    mousepad?:    Mousepad[];
    mouse?:       Mouse[];
    coolerfan?:   Coolerfan[];
}

interface IBuild {
    cpu?: CPU[],
    motherboard?: Mother[],
    coolercpu?: Coolercpu[],
    ram?: Mem[],
    gpu?: Video[],
    hdd?: HD[],
    fuente?: Fuente[],
    gab?: Gab[],
    monitor?: Monitore[],
    perfifericos?: Perifericos[]

}

type Store = {
    build: IBuild,
    paso: string,
    watts: number,
    addProductBuild: (prod: ProductBuild) => void,
    resetProductsBuild: () => void,
    getTotalWatts: () => void,
    nextPaso: () => void,
    prevPaso: () => void,
    customPaso : (paso: string) => void
}

/*
Build: [
    cpu: [],
    motherboard: [],
    cooler: [],
    ram: [],
    gpu: [],
    hdd: [],
    fuente: [],
    gab: [],
    monitor: [],
    perfifericos: []
]

*/

export const useBuildPCStore = create<Store>()((set, get) => ({
    build: {},
    paso: '1',
    watts: 0, 
    resetProductsBuild: () => {
        set({ build: {}, watts: 0, paso: '1' })
    },
    addProductBuild: (prod: ProductBuild) => {
        const paso = get().paso
        // if ( +paso <= 3 ) {
        //     set({build: [prod]})
        // }else {

        //     set((state) => ({  Build: [...state.Build, prod] }))
        // }
    },
    getTotalWatts: () => {
        // const etiquetas = ['constumo', 'tdp']
        const build = Object.values(get().build)
        
        let watts = 0
        build.forEach(async (prod) => {
            // const product = await getProductDetailsBySlug({ slug: '_' + prod.id_producto })
            const data = await fetch(`http://localhost:3000/api/productsDetails/_${prod.id_producto}`)
            const product: ProductDetail = await data.json()
            const wattsReales = product.caracteristicas?.filter(p =>{
               const res =  p.etiqueta.includes('consumo') || p.etiqueta.includes('tdp')
               return res
            } )
        
            if (wattsReales && wattsReales?.length >= 1) {
                watts += +wattsReales[0].valor
               
                set({watts})

            }
        })

    },
    nextPaso: () => {
        set((state) => ({ paso: (+state.paso + 1).toString() }))
    },
    prevPaso: () => {
        set((state) => ({ paso: (+state.paso - 1).toString() }))
    },
    customPaso: (paso: string) => {
        set({ paso })
    }

}))