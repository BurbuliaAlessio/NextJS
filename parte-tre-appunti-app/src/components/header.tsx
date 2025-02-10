'use client';

import { auth } from "@/auth";
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { SigInButton, SigOutButton } from "./button.component";


export default async function Header() {
    const session = await auth();

    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/" className="font-bold">NextAuth</Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {session ? (
                        <SigInButton content="sig In"/>
                    ) : (
                        <SigOutButton content="sig Out"/>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}