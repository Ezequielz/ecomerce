
import { NextResponse, type NextRequest } from 'next/server'
import { connectDB, disconnectDB } from '@/libs/mongodb';
import CarouselMain from '@/products/models/carouselMain';


// export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  // console.log(request.nextUrl.searchParams.get('g'))

  try {
    await connectDB();
    const carouselMain = await CarouselMain.find()
      .select('-_id -__v')
      .lean();

    await disconnectDB();
    return NextResponse.json(carouselMain);
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