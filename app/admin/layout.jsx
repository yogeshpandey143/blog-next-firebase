import Sidebar from "./component/Sidebar";
import AuthContextProvider from "@/lib/context/AuthContext";

export default function Layout({ children }) {
  return (
    <section className="flex min-h-screen">
      <AuthContextProvider>
        <Sidebar className="flex-shrink-0" /> {/* Sidebar visible */}
        <main className="flex-grow p-6">{children}</main>
      </AuthContextProvider>
    </section>
  );
}
