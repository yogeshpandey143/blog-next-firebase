import { Contact, Home, List } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/context/AuthContext";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b-2">
      <Link href={"/"}>
        <img className="h-12" src="/blog-logo.png" alt="logo" />
      </Link>

      <ul className="flex gap-6 items-center">
        <Link href={"/"}>
          <li className="flex gap-2 items-center">
            <Home />
            Home
          </li>
        </Link>
        <Link href={"/admin/categories"}>
          <li className="flex gap-2 items-center">
            <List />
            Category
          </li>
        </Link>
        <li className="flex gap-2 items-center">
          <Contact />
          Contact Us
        </li>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </nav>
  );
}
