import { NextRequest, NextResponse } from 'next/server'
import Product from '@/products/models/product';
import { connectDB, disconnectDB } from '@/libs/mongodb';




async function handler(req: NextRequest, res: NextResponse) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }
    try {
        const getInitialData = await fetch('http://localhost:3000/data/products.json')
        const initialData =  await getInitialData.json()

        await connectDB();
        await Product.deleteMany();
        await Product.insertMany( initialData );
        await disconnectDB();
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'error'});
    }
    
   
   return NextResponse.json({ message: 'Producto semilla agregado correctamente' });

    
}

export {
    handler as GET,

}