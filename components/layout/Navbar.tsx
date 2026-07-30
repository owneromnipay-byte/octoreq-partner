"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Partner } from "@/types/partner";

interface NavbarProps {
    onMenuClick: () => void;
}

export default function Navbar({
    onMenuClick,
}: NavbarProps) {

    const {
        getPartner,
        refreshPartner,
    } = useAuth();

    const [partner, setPartner] =
        useState<Partner | null>(null);

    useEffect(() => {

        const cachedPartner =
            getPartner();

        if (cachedPartner) {

            setPartner(cachedPartner);

        }

        const loadPartner = async () => {

            try {

                const updatedPartner =
                    await refreshPartner();

                setPartner(updatedPartner);

            } catch (error) {

                console.error(
                    "Failed to load partner:",
                    error
                );

            }

        };

        loadPartner();

    }, []);

    return (

        <header
            className="
            h-20
            border-b
            border-zinc-800
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
            "
        >

            <div
                className="
                flex
                items-center
                gap-4
                min-w-0
                "
            >

                <button
                    onClick={onMenuClick}
                    className="
                    lg:hidden
                    text-zinc-400
                    hover:text-white
                    transition-colors
                    "
                    aria-label="Open navigation menu"
                >
                    <Menu size={24} />
                </button>

                <div className="min-w-0">

                    <h2
                        className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                        truncate
                        "
                    >
                        Merchant Partner Portal
                    </h2>

                    <p
                        className="
                        hidden
                        sm:block
                        text-sm
                        text-zinc-400
                        mt-1
                        truncate
                        "
                    >
                        Welcome back
                        {partner?.full_name
                            ? `, ${partner.full_name}`
                            : ""}
                    </p>

                </div>

            </div>

            <div
                className="
                flex
                items-center
                gap-3
                flex-shrink-0
                "
            >

                <div
                    className="
                    h-10
                    w-10
                    rounded-full
                    bg-yellow-500
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                    "
                >
                    {
                        partner?.full_name
                            ?.charAt(0)
                            .toUpperCase() || "?"
                    }
                </div>

                <div
                    className="
                    hidden
                    md:flex
                    flex-col
                    "
                >

                    <span
                        className="
                        text-white
                        font-semibold
                        "
                    >
                        {
                            partner?.full_name ||
                            "Partner"
                        }
                    </span>

                    <span
                        className="
                        text-xs
                        text-zinc-400
                        "
                    >
                        {
                            partner?.referral_code ||
                            partner?.email ||
                            ""
                        }
                    </span>

                </div>

            </div>

        </header>

    );

}