import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Sales() {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  const role = session?.user?.role;
  const allSales = await getData("sales");

  // fetch all the sales and thenm filter by vendorid to get sales for that vendor

  const farmerSales = allSales.filter((sale) => sale.vendorId === id);
  // fetch orderid and get the details like customer name,email,phone, orderno

  return (
    <div>
      {/* table */}
      <div className="py-6">
        {role === "ADMIN" ? (
          <DataTable data={allSales} columns={columns} />
        ) : (
          <DataTable data={farmerSales} columns={columns} />
        )}
      </div>
    </div>
  );
}
