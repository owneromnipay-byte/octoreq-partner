"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Home,
    Users,
    Wallet,
    DollarSign,
    Link2,
    Bell,
    Gift,
    Settings,
    LogOut,
    Landmark,
    X,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Merchants",
        href: "/merchants",
        icon: Users,
    },
    {
        name: "Wallet",
        href: "/wallet",
        icon: Wallet,
    },
    {
        name: "Commissions",
        href: "/commissions",
        icon: DollarSign,
    },
    {
        name: "Referrals",
        href: "/referrals",
        icon: Link2,
    },
    {
        name: "Notifications",
        href: "/notifications",
        icon: Bell,
    },
    {
        name: "Rewards",
        href: "/rewards",
        icon: Gift,
    },
    {
        name: "Payouts",
        href: "/payouts",
        icon: Landmark,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

export default function Sidebar({
    open,
    onClose,
}: SidebarProps) {

    const pathname = usePathname();

    const { logout } = useAuth();

    return (
        <>
            {/* Mobile Overlay */}

            <div
                onClick={onClose}
                className={`
                    fixed
                    inset-0
                    z-40
                    bg-black/60
                    transition-opacity
                    duration-300
                    lg:hidden
                    ${
                        open
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            <aside
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    h-screen
                    w-64
                    bg-zinc-950
                    border-r
                    border-zinc-800
                    flex
                    flex-col
                    transition-transform
                    duration-300

                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }

                    lg:translate-x-0
                    lg:static
                    lg:z-auto
                `}
            >

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-8
                    "
                >

                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-yellow-500
                        tracking-tight
                        "
                    >
                        OCTOREQ
                    </h1>

                    <button
                        onClick={onClose}
                        className="
                        lg:hidden
                        text-zinc-400
                        hover:text-white
                        "
                    >
                        <X size={22} />
                    </button>

                </div>

                <nav
                    className="
                    flex-1
                    px-4
                    flex
                    flex-col
                    gap-2
                    overflow-y-auto
                    "
                >

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            pathname.startsWith(
                                `${item.href}/`
                            );

                        return (

                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all

                                    ${
                                        active
                                            ? "bg-yellow-500 text-black"
                                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                                    }
                                `}
                            >

                                <Icon size={18} />

                                <span>
                                    {item.name}
                                </span>

                            </Link>

                        );

                    })}

                </nav>

                <div
                    className="
                    p-4
                    border-t
                    border-zinc-800
                    "
                >

                    <button
                        onClick={logout}
                        className="
                        w-full
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-red-500
                        hover:bg-red-500/10
                        hover:text-red-400
                        transition-all
                        "
                    >

                        <LogOut size={18} />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>
        </>
    );

}