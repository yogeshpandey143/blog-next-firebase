import {
  ChartBarStacked,
  LayoutDashboard,
  StickyNote,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const list = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <StickyNote />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <ChartBarStacked />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <UserRound />,
    },
  ];

  return (
    <section className="w-[200px] border-r h-screen p-6 bg-gray-200">
      <ul className="w-full flex flex-col gap-6">
        {list.map((item, index) => (
          <Link href={item.link} key={index}>
            <li className="flex gap-3 font-bold items-center bg-blue-50 rounded-full px-5 py-2">
              {item.icon}
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
