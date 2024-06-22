import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";

export default async function page() {
  const trainings = await getData("trainings");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Jindal Community Trainings"}
        href={"/dashboard/community/new"}
        linkTitle={"Add Training"}
      />
      {/* Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      {/* <TableActions /> */}

      {/* table */}
      <div className="py-6">
        <DataTable data={trainings} columns={columns} />
      </div>
    </div>
  );
}
