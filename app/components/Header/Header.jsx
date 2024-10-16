import { Contact, Home, List } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/context/AuthContext";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b-2">
      <img className="h-12" src="/blog-logo.png" alt="logo" />

      <ul className="flex gap-6 items-center">
        <li className="flex gap-2 items-center">
          <Home />
          Home
        </li>
        <li className="flex gap-2 items-center">
          <List />
          Category
        </li>
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
