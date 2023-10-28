import { connectDB, disconnectDB } from "@/libs/mongodb"
import BuildPC from "../models/buildPc";
import { CPU, Mother } from "../interfaces/buildpc";


// import Product from "@/products/models/product"


interface Props {
    searchParams: {
        [key: string]: string | undefined;
    } | undefined
}

export const getProductsToBuild = async ({ searchParams }: Props) => {
    let tipo = searchParams?.tipo && searchParams.tipo
    const paso = searchParams?.paso && searchParams.paso
    const sub = searchParams?.sub && searchParams.sub

    let select = 'cpu'
    if (paso === '2') select = 'mothers'
    if (paso === '3') select = 'coolercpu'
    if (paso === '4') select = 'mem'
    if (paso === '5') select = 'video'
    if (paso === '6') select = 'hd'
    if (paso === '7') select = 'fuente'
    if (paso === '8') select = 'gab'
    if (paso === '9') select = 'monitores'
    if (paso === '10' && sub === 'all' || (paso === '10' && !sub)) {
        select = 'auriculares teclados mousepad mouse coolerfan'
    } else if (paso === '10' && sub !== 'all') {
        select = sub!
    }
    

    await connectDB();

    const products = await BuildPC.find()

        .limit(1)

        .select(select + ' -_id')
        .lean()


    await disconnectDB();

    if (paso === '10' && sub === 'all'){
      
        const prod: any = Object.values(products)
        const all = [].concat(
            prod[0].auriculares,
            prod[0].coolerfan,
            prod[0].mouse,
            prod[0].mousepad,
            prod[0].teclados
          );
          
          return all
    }

    if (paso === '1' && tipo !== undefined ){
        const tipocpu = tipo === '27' ? 'AMD' : 'Intel'
        const cpus = Object.values(products[0])[0] as CPU[]
        const cpuFiltered = cpus.filter(cpu => cpu.familia.includes(tipocpu))
      
        return cpuFiltered
    }

    return Object.values(products[0])[0]


}