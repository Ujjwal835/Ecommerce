import { NextResponse } from "next/server";
{
  /* -id=>auto()  -title  -slug=>auto()  -description  -image/images[] -sku -barcode -product price   -sale price  -category  -farmer -tags[] */
}
export async function POST(request) {
  try {
    const productData = await request.json();

    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Product",
        error,
      },
      { status: 500 }
    );
  }
}
