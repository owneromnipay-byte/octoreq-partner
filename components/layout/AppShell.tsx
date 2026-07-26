"use client";

import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppShell({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    const publicRoutes = [
    "/login",
    "/apply",
    "/activate",
    "/forgot-password",
    "/reset-password",
];

const isPublicRoute = publicRoutes.some(
    (route) =>
        pathname === route ||
        pathname.startsWith(`${route}/`)
);

if (isPublicRoute) {
    return <>{children}</>;
}

    return (
        <div className="flex min-h-screen bg-black">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="
                p-10
                max-w-7xl">
                    {children}
                </main>

            </div>

        </div>
    );
}