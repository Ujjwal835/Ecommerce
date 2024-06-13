import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Farmers"}
        href={"/dashboard/farmers/new"}
        linkTitle={"Add Farmer"}
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
