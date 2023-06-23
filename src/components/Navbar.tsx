'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 h-28">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Demo .
        </Link>
      </div>
      {session ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://devsnow.in/me.PNG"
                  alt="user profile"
                  width={100}
                  height={100}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="border-2 border-primary mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile" className="justify-between p-2">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li>
                <Link href="/settings" className="p-2">
                  Settings
                </Link>
              </li>
              <li>
                <button className="p-2" onClick={() => signOut()}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link href="/auth/signin" className="btn btn-primary capitalize">
          Signin
        </Link>
      )}
    </div>
  );
}
