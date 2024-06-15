import db from "@/lib/db";
import { NextResponse } from "next/server";
{
  /* -id=>auto()  -title  -slug=>auto()  -description  -image/images[] -sku -barcode -product price   -sale price  -categoryId  -farmerId:UserId -tags[] isWholesale -wholesalePrice -wholesaleQty  -unit -productCode -productStock -qty */
}
export async function POST(request) {
  try {
    const {
      barcode,
      categoryId,
      description,
      farmerId,
      imageUrl,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      productStock,
      sku,
      slug,
      tags,
      title,
      unit,
      wholesalePrice,
      wholesaleQty,
      qty,
    } = await request.json();
    // checking if product already exist or not
    const existingProduct = await db.Product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product Already Exists",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.Product.create({
      data: {
        barcode,
        categoryId,
        description,
        userId: farmerId,
        imageUrl,
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        productStock: parseInt(productStock),
        sku,
        slug,
        tags,
        title,
        unit,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        qty: parseInt(qty),
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
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

export async function GET(request) {
  try {
    const products = await db.Product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Products",
        error,
      },
      { status: 500 }
    );
  }
}
