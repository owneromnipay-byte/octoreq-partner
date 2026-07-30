"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="flex min-h-screen bg-black">

            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex flex-1 flex-col">

                <Navbar
                    onMenuClick={() => setSidebarOpen(true)}
                />

                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>

        </div>

    );

}