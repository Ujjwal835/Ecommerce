import { getData } from "@/lib/getData";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function DemoPage() {
  const data = await getData("categories");

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
