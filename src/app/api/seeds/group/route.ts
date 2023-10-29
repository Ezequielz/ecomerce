import { NextRequest, NextResponse } from 'next/server'
import { connectDB, disconnectDB } from '@/libs/mongodb';
import Group from '@/products/models/group';





async function handler(req: NextRequest, res: NextResponse) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }
    try {
        const getInitialData = await fetch('http://localhost:3000/data/group.json')
        const initialData =  await getInitialData.json()

        await connectDB();
        await Group.deleteMany();
        await Group.insertMany( initialData );
        await disconnectDB();
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'error'});
    }
    
   
   return NextResponse.json({ message: 'Group semilla agregado correctamente' });

    
}

export {
    handler as GET,

}