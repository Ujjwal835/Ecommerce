import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
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
      <TableActions />

      {/* table */}
      <div className="py-6">
        <h2>Table</h2>
      </div>
    </div>
  );
}
