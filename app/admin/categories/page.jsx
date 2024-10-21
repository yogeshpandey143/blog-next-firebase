import { SquarePlus } from "lucide-react";
import Link from "next/link";
import CategoryListView from "./components/CategotyListView";

export default function Page() {
  return (
    <main className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold ">Categories</h1>
        <Link href={"/admin/categories/form"}>
          <button className="bg-blue-500 px-4 py-2 text-white  rounded-full font-bold gap-2 items-center flex">
            <SquarePlus />
            Add
          </button>
        </Link>
      </div>
      <CategoryListView />
    </main>
  );
}
