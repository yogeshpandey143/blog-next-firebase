"use client";

import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
export default function LoginButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } =
    useAuth();

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (user) {
    return (
      <div className=" gap-3 flex items-center">
        <button
          onClick={() => {
            handleLogout();
          }}
          className="bg-black
       rounded-full text-white px-4 py-2  gap-3 flex"
        >
          Logout
        </button>
        <Link href={"/admin"}>
          <div
            className="bg-blue-100
       rounded-md text-white items-center px-2 py-1 gap-3 flex"
          >
            <img
              className="object-cover h-10 w-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <div>
              <h2 className="font-bold text-black">{user?.displayName}</h2>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <section>
      <button
        onClick={() => {
          handleSignInWithGoogle();
        }}
        className="bg-black
       rounded-full text-white px-4 py-2 flex gap-2"
      >
        <img className="h-7 rounded-full" src="/google.webp" alt="" />
        Login with google
      </button>
    </section>
  );
}
