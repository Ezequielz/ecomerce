import { NextRequest, NextResponse } from "next/server";
import { connectDB, disconnectDB } from "@/libs/mongodb";
import Product from "@/products/models/product";


export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {

  const slug = params.slug
  const slugArr = slug.split('_')
  const id = slugArr[slugArr.length - 1]
  try {
    await connectDB()
    const result = await Product.findOne({ id_producto: id  })
      .select('-_id -__v')
      .lean();

    await disconnectDB()
    if (!result) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}