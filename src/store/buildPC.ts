import { create } from 'zustand'
import type { Auriculare, BuildPC, Coolerfan, Mouse, Mousepad, Teclado } from '@/buildpc/interfaces/buildpc';
import { type Product } from '@/products/interfaces/product';
import { type ProductDetail } from '@/products/interfaces/productDetail';

export interface ProductBuild extends Product {
    paso: string

}

interface IBuildPC extends BuildPC {
    perifericos? : Auriculare[] | Mouse[] | Mousepad[] | Teclado[] | Coolerfan[]
}


type Store = {
    build: IBuildPC,
    paso: string,
    watts: number,
    
    addProductBuild: (prod: ProductBuild) => void,
    resetProductsBuild: () => void,
    getTotalWatts: () => void,
    nextPaso: () => void,
    prevPaso: () => void,
    customPaso : (paso: string) => void
}

const initialBuild:IBuildPC = {
    cpu: [],
    mothers: [],
    coolercpu: [],
    mem: [],
    video: [],
    hd: [],
    fuente: [],
    gab: [],
    monitores: [],
    perifericos: []
}

export const useBuildPCStore = create<Store>()((set, get) => ({
    build: initialBuild,
    paso: '1',
    watts: 0, 
    resetProductsBuild: () => {
        set({ build: {}, watts: 0, paso: '1' })
    },
    addProductBuild: (prod: any) => {
        const paso = get().paso
       if (+paso === 1) {
        set((state) => ({  build: {...state.build, cpu: [prod]}, paso:'2'}))
       }
       if (+paso === 2) {
        set((state) => ({  build: {...state.build, mothers: [prod]}, paso:'3' }))
       }
       if (+paso === 3) {
        set((state) => ({  build: {...state.build, coolercpu: [prod]}, paso:'4' }))
       }
       if (+paso === 4) {
        set((state) => ({  build: {...state.build, mem: [ ...state.build.mem || [], prod]} }))
        const mem = get().build.mem

        if (mem && mem.length >= 4) {
            set({paso: '5'})
        }
       }
       if (+paso === 5) {
        set((state) => ({  build: {...state.build, video: [ ...state.build.video || [], prod]} }))
        const video = get().build.video
     
        if (video && video.length >= 2) {
            set({paso: '6'})
        }
       }
       if (+paso === 6) {
        set((state) => ({  build: {...state.build, hd: [ ...state.build.hd || [], prod]} }))
        const hd = get().build.hd
        if (hd && hd.length >= 2) {
            set({paso: '7'})
        }
       }
       if (+paso === 7) {
        set((state) => ({  build: {...state.build, fuente: [prod]},  paso:'8' }))
       }
       if (+paso === 8) {
        set((state) => ({  build: {...state.build, gab: [prod]},  paso:'9' }))
       }
       if (+paso === 9) {
        set((state) => ({  build: {...state.build, monitores: [ ...state.build.monitores || [], prod]} }))
        const monitores = get().build.monitores
        if (monitores && monitores.length >= 3) {
            set({paso: '10'})
        }
       }
       if (+paso === 10) {
        set((state) => ({  build: {...state.build, perifericos: [ ...state.build.perifericos || [], prod]} }))
       }
 
    },
    getTotalWatts: () => {
        // const etiquetas = ['constumo', 'tdp']
        const build = Object.values(get().build)
        // console.log(build)
        let watts = 0

        Object.values(build).forEach((items: any) => {
            items.forEach(async (prod: any) => {
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
        });




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