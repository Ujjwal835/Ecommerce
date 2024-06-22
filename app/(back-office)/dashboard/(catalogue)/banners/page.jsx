import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const banners = await getData("banners");

  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Banners"}
        href={"/dashboard/banners/new"}
        linkTitle={"Add Banner"}
      />
      {/* Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      {/* <TableActions /> */}

      {/* table */}
      <div className="py-8">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
