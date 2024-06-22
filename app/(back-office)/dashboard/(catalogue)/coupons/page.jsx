import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";

export default async function Coupons() {
  const coupons = await getData("coupons");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Coupons"}
        href={"/dashboard/coupons/new"}
        linkTitle={"Add Coupon"}
      />
      {/* Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      {/* <TableActions /> */}

      {/* table */}
      <div className="py-6">
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  );
}
