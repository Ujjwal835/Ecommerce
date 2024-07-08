import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Coupons() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const role = session?.user?.role;
  const allCoupons = await getData("coupons");
  const id = session?.user?.id;
  const farmerCoupons = allCoupons.filter((coupon) => coupon.vendorId === id);
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
        {role === "ADMIN" ? (
          <DataTable data={allCoupons} columns={columns} />
        ) : (
          <DataTable data={farmerCoupons} columns={columns} />
        )}
      </div>
    </div>
  );
}
