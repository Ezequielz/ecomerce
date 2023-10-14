
import { NextResponse, type NextRequest } from 'next/server'
import { connectDB, disconnectDB } from '@/libs/mongodb';
import Product from '@/products/models/product';

// export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  // console.log(request.nextUrl.searchParams.get('g'))

  try {
    await connectDB();
    const products = await Product.find()
      .select('-_id -__v')
      .lean();

    await disconnectDB();
    return NextResponse.json(products);
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


// export async function POST(request: NextRequest) {
//   try {
//     const product: Product = await request.json();
 
//      if (Object.keys(product).length < 1) {
//         return NextResponse.json(
//           {
//             message: 'No hay o faltan datos del producto',
//           },
//           {
//             status: 400,
//           }
//         );
//       }
//       await connectDB();
//       const productInDB = await Product.findOne({ id_producto: product.id_producto });
//       if ( productInDB ) {
//           await disconnectDB();
//           return NextResponse.json({ message: 'Ya existe un producto con ese slug' },{status: 400});
//       }

//       const newProduct = new Product( product );
//       await newProduct.save();
//       await disconnectDB();

//       return NextResponse.json({
//         message: 'Producto creado correctamente',
//         product
//       }, {
//         status: 200
//       })
    
//   } catch (error: any) {
//     await disconnectDB();
//     return NextResponse.json(
//       {
//         message: error.message,

//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }



