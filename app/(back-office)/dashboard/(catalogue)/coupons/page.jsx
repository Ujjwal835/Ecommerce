import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";

import React from "react";

export default function Coupons() {
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
      <TableActions />

      {/* table */}
      <div className="py-6">
        <h2>Table</h2>
      </div>
    </div>
  );
}
