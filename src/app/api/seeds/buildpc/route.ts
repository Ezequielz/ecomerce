import { NextRequest, NextResponse } from 'next/server'

import { connectDB, disconnectDB } from '@/libs/mongodb';
import BuildPC from '@/buildpc/models/buildPc';




async function handler(req: NextRequest, res: NextResponse) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }
    try {
        const getInitialData = await fetch('http://localhost:3000/data/pcbuild.json')
        const initialData =  await getInitialData.json()

        await connectDB();
        await BuildPC.deleteMany();
        await BuildPC.insertMany( initialData );
        await disconnectDB();
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'error'});
    }
    
   
   return NextResponse.json({ message: 'buildPC semilla agregado correctamente' });

    
}

export {
    handler as GET,

}