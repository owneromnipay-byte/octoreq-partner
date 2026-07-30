"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { useAuth } from "@/hooks/useAuth";

export default function AppShell({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    const router = useRouter();

    const { isAuthenticated } = useAuth();

    const [checkingAuth, setCheckingAuth] =
        useState(true);

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    const publicRoutes = [
        "/login",
        "/apply",
        "/activate",
        "/forgot-password",
        "/reset-password",
        "/success",
    ];

    const isPublicRoute =
        publicRoutes.some(
            (route) =>
                pathname === route ||
                pathname.startsWith(`${route}/`)
        );

    useEffect(() => {

        if (isPublicRoute) {

            setCheckingAuth(false);

            return;

        }

        const verify = async () => {

            const authenticated =
                await isAuthenticated();

            if (!authenticated) {

                router.replace("/login");

                return;

            }

            setCheckingAuth(false);

        };

        verify();

    }, [
        pathname,
        isPublicRoute,
        isAuthenticated,
        router,
    ]);

    useEffect(() => {

        setSidebarOpen(false);

    }, [pathname]);

    if (checkingAuth) {

        return (

            <div
                className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-black
                text-zinc-400
                "
            >
                Loading...
            </div>

        );

    }

    if (isPublicRoute) {

        return <>{children}</>;

    }

    return (

        <div
            className="
            min-h-screen
            bg-black
            flex
            overflow-hidden
            "
        >

            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div
                className="
                flex-1
                flex
                flex-col
                min-w-0
                "
            >

                <Navbar
                    onMenuClick={() =>
                        setSidebarOpen(true)
                    }
                />

                <main
                    className="
                    flex-1
                    w-full
                    max-w-7xl
                    mx-auto
                    px-4
                    py-6
                    sm:px-6
                    lg:px-10
                    overflow-x-hidden
                    "
                >

                    {children}

                </main>

            </div>

        </div>

    );

}