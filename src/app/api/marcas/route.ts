
import { NextResponse, type NextRequest } from 'next/server'
import { connectDB, disconnectDB } from '@/libs/mongodb';
import Marca from '@/products/models/marca';


// export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  // console.log(request.nextUrl.searchParams.get('g'))

  try {
    await connectDB();
    const marcas = await Marca.find()
      .select('-_id -__v')
      .lean();

    await disconnectDB();
    return NextResponse.json(marcas);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
}