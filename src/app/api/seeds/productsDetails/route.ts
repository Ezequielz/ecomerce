import { NextRequest, NextResponse } from 'next/server'
import { connectDB, disconnectDB } from '@/libs/mongodb';
import ProductDetail from '@/products/models/productDetail';


async function handler(req: NextRequest, res: NextResponse) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }
    try {
        const getInitialData = await fetch('http://localhost:3000/data/productsDetails.json')
        const initialData =  await getInitialData.json()

        await connectDB();
        await ProductDetail.deleteMany();
        await ProductDetail.insertMany( initialData );
        await disconnectDB();
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'error'});
    }
    
   
   return NextResponse.json({ message: 'ProductsDetails semilla agregado correctamente' });

    
}

export {
    handler as GET,

}