"use client";

import { usePosts } from "@/lib/firebase/post/read";
import Link from "next/link";

export default function PostListView() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!data) {
    return <h1>Data not found!</h1>;
  }

  return (
    <section>
      <table className="border px-4 py-2 rounded-lg  font-bold w-full">
        <thead className="">
          <tr>
            <th className="border px-4 py-2 bg-blue-50">Sr.</th>
            <th className="border px-4 py-2 bg-blue-50">Icon</th>
            <th className="border px-4 py-2 bg-blue-50">Name</th>
            <th className="border px-4 py-2 bg-blue-50">Slug</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item, key) => {
            return (
              <tr>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">
                  <img className="h-10 " src={item?.imageURL} alt="" />
                </td>
                <td className="border px-4 py-2">{item?.name}</td>
                <td className="border px-4 py-2">{item?.slug}</td>
                <td className="border px-4 py-2">
                  <Link href={`/admin/posts/form?id=${item?.id}`}>
                    <button className="bg-blue-500 px-4 py-2 text-white  rounded-full font-bold gap-2 items-center flex">
                      Action
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
