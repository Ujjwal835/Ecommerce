import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const farmers = await getData("farmers");
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
      {/* <TableActions /> */}

      {/* table */}
      <div className="py-6">
        <DataTable data={farmers} columns={columns} filterKeys={["name"]} />
      </div>
    </div>
  );
}
