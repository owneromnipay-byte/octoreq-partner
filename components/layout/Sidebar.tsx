"use client";

import Link from "next/link";

import {
    usePathname,
    useRouter
} from "next/navigation";

import {
    Home,
    Users,
    Wallet,
    DollarSign,
    Link2,
    Bell,
    Gift,
    Settings,
    LogOut
} from "lucide-react";

const items = [

    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home
    },

    {
        name: "Merchants",
        href: "/merchants",
        icon: Users
    },

    {
        name: "Wallet",
        href: "/wallet",
        icon: Wallet
    },

    {
        name: "Commissions",
        href: "/commissions",
        icon: DollarSign
    },

    {
        name: "Referrals",
        href: "/referrals",
        icon: Link2
    },

    {
        name: "Notifications",
        href: "/notifications",
        icon: Bell
    },

    {
        name: "Rewards",
        href: "/rewards",
        icon: Gift
    },

    {
        name: "Settings",
        href: "/settings",
        icon: Settings
    }
];

export default function Sidebar() {

    const pathname =
        usePathname();

    const router =
        useRouter();

    const handleLogout =
        () => {

            localStorage.removeItem(
                "token"
            );

            router.push(
                "/login"
            );
        };

    return (

        <aside
            className="
            w-64
            min-h-screen
            bg-zinc-950
            border-r
            border-zinc-800
            p-6
            "
        >

            <h1
                className="
                text-3xl
                font-bold
                text-yellow-500
                mb-10
                "
            >
                OCTOREQ
            </h1>

            <nav
                className="
                flex
                flex-col
                gap-3
                "
            >

                {
                    items.map(
                        (
                            item
                        ) => {

                            const Icon =
                                item.icon;

                            return (

                                <Link

                                    key={
                                        item.name
                                    }

                                    href={
                                        item.href
                                    }

                                    className={`
                                    flex
                                    items-center
                                    gap-3
                                    p-4
                                    rounded-xl
                                    transition

                                    ${
                                        pathname ===
                                        item.href

                                        ?

                                        "bg-yellow-500 text-black"

                                        :

                                        "text-zinc-400 hover:bg-zinc-900"
                                    }
                                    `}
                                >

                                    <Icon
                                        size={18}
                                    />

                                    {
                                        item.name
                                    }

                                </Link>
                            );
                        }
                    )
                }

            </nav>

            <button

                onClick={
                    handleLogout
                }

                className="
                flex
                items-center
                gap-3
                mt-10
                text-red-500
                hover:text-red-400
                transition
                "
            >

                <LogOut
                    size={18}
                />

                Logout

            </button>

        </aside>
    );
}