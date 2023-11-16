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
    hardware: IHardware[],
    tipo?: number,
    
    setTipo: (n : number) => void,
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

interface IHardware {
    id: number;
    imgDefault: string[];
    title: string;
    txt: string;

}

let hardware: IHardware[] = [
    {
        id: 1,
        imgDefault: ['cpu1.png', 'cpu2.png'],
        title: 'Elegí tu Procesador',
        txt: 'Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.'
    },
    {
        id: 2,
        imgDefault: ['mother1.png', 'mother2.png'],
        title: 'Elegí tu Mother',
        txt: 'Es donde se conectarán todos los componentes de tu PC. Según el modelo que elijas tendrás diferentes beneficios de conectividad y expansión'
    },
    {
        id: 3,
        imgDefault: ['cooler1.png', 'cooler2.png'],
        title: 'Elegí tu Cooler',
        txt: 'El cooler mantiene la temperatura de tu equipo, evitando el daño en los componentes y permitiendo que este funcione correctamente.'
    },
    {
        id: 4,
        imgDefault: ['memo1.png', 'memo2.png'],
        title: 'Elegí tu Memorias',
        txt: 'Las memorias sirven para cargar y almacenar todas las instrucciones que se ejecutan en el procesador. Lo que se debe tener en cuenta en esta sección es el tamaño, la frecuencia y la cantidad de módulos'
    },
    {
        id: 5,
        imgDefault: ['gpu1.png', 'gpu2.png'],
        title: 'Elegí tu Placa de Video',
        txt: 'El procesador gráfico de una tarjeta es muchísimo más potente que el que tienen los procesadores, por esta razón es necesaria para el buen funcionamiento del equipo y muy recomendada para gamers y profesionales de los gráficos.'
    },
    {
        id: 6,
        imgDefault: ['hhd1.png', 'hhd2.png'],
        title: 'Elegí tu Almacenamiento',
        txt: 'Acá es donde se guardarán tus documentos. Se debe tener en cuenta el tamaño y la velocidad. Las unidades SSD son más veloces y pueden ser utilizadas como unidad principal de almacenamiento o como un complemento de un almacenamiento HDD.'
    },
    {
        id: 7,
        imgDefault: ['poder1.png', 'poder2.png'],
        title: 'Elegí tu Fuente',
        txt: 'La fuente es la encargada de alimentar al resto de los componentes y va a ser uno de los factores a tener en cuenta si querés armar una pc potente.'
    },
    {
        id: 8,
        imgDefault: ['gabo1.png', 'gabo2.png'],
        title: 'Elegí tu Gabinete',
        txt: 'Es fundamental para el armado de la pc ya que contendrá todos los componentes funcionales de la misma. Podés revisar las medidas en el botón de especificaciones'
    },
    {
        id: 9,
        imgDefault: ['moni1.png', 'moni2.png'],
        title: 'Elegí tu Monitor',
        txt: 'El monitor es fundamental si querés disfrutar de tus juegos y peliculas favoritas'
    },
    {
        id: 10,
        imgDefault: ['periferico1.png', 'periferico2.png'],
        title: 'Elegí tu Periféricos',
        txt: 'Mouses, Teclados, MousePad, Auriculares, Coolers, y mas'
    }
]

export const useBuildPCStore = create<Store>()((set, get) => ({
    build: initialBuild,
    paso: '1',
    watts: 0, 
    hardware,
    tipo: undefined,

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
    },
    setTipo: ( n : number) => {
        set({tipo: n})
    }

}))