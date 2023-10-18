
import { connectDB, disconnectDB } from '@/libs/mongodb';

import Filter from '../models/filter';
import Categorie from '../models/categorie';

import ProductDetail from '../models/productDetail';
import Product from '../models/product';
import Marca from '../models/marca';
import CarouselMain from '../models/carouselMain';


interface Props {
    searchParams: {
        [key: string]: string | undefined;
    } | undefined
}

export const getProducts = async ( {searchParams} : Props) => {

   const page = searchParams?.page ? Number(searchParams.page) : 0
   const sort = searchParams?.sort && Number(searchParams.sort)
   const cat = searchParams?.cat && searchParams.cat
   const search = searchParams?.criterio ? searchParams.criterio : ''
//    const term = search.toString()
    
    const numberPag = page * 20;
    let conditionFind: any = {imagenes: {$nin: null}}


    if (search) {
    
        
        conditionFind = {
            $text: { $search: search }
        }
    }
    if (cat) {
        conditionFind = {...conditionFind, id_subcategoria: cat}
    }
    let conditionSort: any = { destacado: 1 }
    if (sort === 0) {
        conditionSort = { ...conditionSort, destacado: 1 }
        
    } else if (sort === 1) {
        conditionSort = { ...conditionSort, precioEspecial: -1}
    }else if (sort === 2) {
        conditionSort = { ...conditionSort, precioEspecial: 1}
    } 

    await connectDB();
   
    const products = await Product.find(conditionFind)
        .sort(conditionSort)
        .skip(numberPag)
        .limit(20)
        .select('-_id -__v')
        .lean();
   
    await disconnectDB();

    return products


}


export const getProductById = async ({ slug }: {slug:string}) => {
    await connectDB();
    const slugArr = slug.split('_')
    const id = slugArr[slugArr.length - 1]
    const productById = await Product.find({ id_producto: id })
        .select('-_id -__v')
        .lean();
    await disconnectDB();
    return productById[0]
}
export const getProductsDetails = async ({ slug }: {slug:string}) => {
    await connectDB();
    const slugArr = slug.split('_')
    const id = slugArr[slugArr.length - 1]
    const productDetail = await ProductDetail.find({ id_producto: id })
    .select('-_id -__v')
    .lean();
    await disconnectDB();
    return productDetail[0];
}


export const getFilters = async () => {
    // await sleep(2)

    await connectDB();
    const filters = await Filter.find()
        .select('-_id -__v')
        .lean();

    await disconnectDB();

    // const { data } = await productsApi.get<Filter[]>('/filters');

    return filters;
}
export const getFilterById = async ( {id} : {id : number} ) => {
    await connectDB();

    const filtertById = await Filter.find({ id })
        .select('-_id -__v')
        .lean();
    await disconnectDB();
    return filtertById[0]
}

export const getMarcaById = async ( {id} : {id : number} ) => {
    await connectDB();

    const marcaById = await Marca.find({ id })
        .select('-_id -__v')
        .lean();
    await disconnectDB();
    return marcaById[0]
}

export const getCategories = async () => {
    
    await connectDB();
    const categories = await Categorie.find()
        .select('-_id -__v')
        .lean();

    await disconnectDB();

    return categories;
}
export const getCategorieById = async ( {id} : {id : number} ) => {
    await connectDB();

    const categorietById = await Categorie.find({ id })
        .select('-_id -__v')
        .lean();
    await disconnectDB();
    return categorietById[0]
}

export const getCarouselMain = async ( ) => {

 
     await connectDB();
     const carouselMain = await CarouselMain.find()
         .select('-_id -__v')
         .lean();
    
     await disconnectDB();
 
     return carouselMain
 
 
 }






// export const addProduct = async( product: any ) => {

//     var requestOptions = {
//         method: 'POST',
//         body: JSON.stringify(product)
//       };
//     // console.log('Product in addProdcut',product)
//     try {
//         const res = await fetch('http://localhost:3000/api/product',requestOptions)

//         console.log(await res.json())


//     } catch (error) {
//         console.log(error)
//         return 'nada'
//     }



// }


