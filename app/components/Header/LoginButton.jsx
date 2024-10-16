"use client";

import { useAuth } from "@/lib/context/AuthContext";

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
      <div
        className="bg-blue-100
       rounded-md text-white items-center px-2 py-1 gap-3 flex"
      >
        <button
          onClick={() => {
            handleLogout();
          }}
          className="bg-black
       rounded-full text-white px-4 py-2  gap-3 flex"
        >
          Logout
        </button>

        <div className="flex gap-2">
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
