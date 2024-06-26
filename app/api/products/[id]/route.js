import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const product = await db.Product.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingProduct = await db.Product.findUnique({
      where: {
        id,
      },
    });
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product not Found",
        },
        { status: 404 }
      );
    }
    const deletedProduct = await db.Product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    // receive the data
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
    const existingProduct = await db.Product.findUnique({
      where: {
        id,
      },
    });
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }

    const updatedProduct = await db.Product.update({
      where: { id },
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
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Product",
        error,
      },
      { status: 500 }
    );
  }
}
