
"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assests/logo.png";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";

export default function Navbar() {
  return <header className="shadow-sm">
    <div className="max-w-7xl mx-auto p-3 flex items-center justify-between gap-3">
      <Link href="/resumes" className="flex items-center gap-2">
        <Image src={Logo} alt="KiteAI Logo" width={32} height={32} className="rounded-full" />
        <span className="font-bold">KiteAI</span>
      </Link>

        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label ="Billing"
              labelIcon={<CreditCard className="size-4" />}
              href="/billing"
            />
          </UserButton.MenuItems>
        </UserButton>
    </div>
  </header>
}