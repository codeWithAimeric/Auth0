"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import SignupButton from "./signup-button";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";


const NavBar = () => {
    const {user, error, isLoading} = useUser();
  return (
    <div className="py-4 flex w-full justify-between bg-gray-800">
        <div className="flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/profile">Server Protected Profile</Link>
            <Link href="/auth-protected">Auth Protected Profile</Link>
            <Link href="/middleware">Middleware Protection</Link>
            <Link href="/api/data">Protected API</Link>
        </div>
        <div className="flex gap-4">
            {!user && !isLoading && (
                <>
                    <SignupButton />
                    <LoginButton />
                </>
            )}
            {user && !isLoading && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    </div>
  )
}

export default NavBar