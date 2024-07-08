import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const role = session?.user?.role;
  const allProducts = await getData("products");
  const id = session?.user?.id;
  const farmerProducts = allProducts.filter((product) => product.userId === id);
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Products"}
        href={"/dashboard/products/new"}
        linkTitle={"Add Product"}
      />
      {/* Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      {/* <TableActions /> */}

      {/* table */}
      <div className="py-6">
        {role === "ADMIN" ? (
          <DataTable data={allProducts} columns={columns} />
        ) : (
          <DataTable data={farmerProducts} columns={columns} />
        )}
      </div>
    </div>
  );
}
