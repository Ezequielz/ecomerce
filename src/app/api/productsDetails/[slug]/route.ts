import { NextRequest, NextResponse } from "next/server";
import { connectDB, disconnectDB } from "@/libs/mongodb";
import ProductDetail from "@/products/models/productDetail";



export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {

  const slug = params.slug
  const slugArr = slug.split('_')
  const id = slugArr[slugArr.length - 1]
  try {
    await connectDB()
    const result = await ProductDetail.findOne({ id_producto: id  })
      .select('-_id -__v')
      .lean();

    await disconnectDB()
    if (!result) {
      return NextResponse.json(
        {
          message: "Detalle del producto no encontrado",
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