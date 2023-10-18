import { NextRequest, NextResponse } from 'next/server'

import { connectDB, disconnectDB } from '@/libs/mongodb';
import CarouselMain from '@/products/models/carouselMain';



async function handler(req: NextRequest, res: NextResponse) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }
    try {
        const getInitialData = await fetch('http://localhost:3000/data/carouselMain.json')
        const initialData =  await getInitialData.json()

        await connectDB();
        await CarouselMain.deleteMany();
        await CarouselMain.insertMany( initialData );
        await disconnectDB();
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'error'});
    }
    
   
   return NextResponse.json({ message: 'carouselMain semilla agregado correctamente' });

    
}

export {
    handler as GET,

}